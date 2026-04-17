import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ImageSequenceProps {
  frameCount: number;
  basePath: string;
  extension?: string;
}

export const ImageSequence: React.FC<ImageSequenceProps> = ({ 
  frameCount, 
  basePath, 
  extension = 'png' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const preLoadImages = async () => {
      // Test first image to determine padding
      const testImage = async () => {
        const paddings = [6, 4, 3, 2, 1];
        for (const p of paddings) {
          const success = await new Promise<boolean>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = `${basePath}${String(1).padStart(p, '0')}.${extension}`;
          });
          if (success) return p;
        }
        return 6; // Default
      };

      const detectedPadding = await testImage();

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(detectedPadding, '0');
        const src = `${basePath}${paddedIndex}.${extension}`;
        img.src = src;
        
        img.onload = () => {
          loadedCount++;
          setLoadProgress(Math.floor((loadedCount / frameCount) * 100));
          // If the first image finishes loading, draw it immediately
          if (i === 1) {
            setImages([...loadedImages]); 
          }
          if (loadedCount === frameCount) {
            setIsLoading(false);
          }
        };

        img.onerror = () => {
          loadedCount++;
          if (i === 1) {
             setErrorStatus(`Failed to load: ${src}. Verify filename/path.`);
          }
          if (loadedCount === frameCount) setIsLoading(false);
        };

        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preLoadImages();
  }, [frameCount, basePath, extension]);

  // Handle Rendering and Resize (Unified)
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        const dpr = window.devicePixelRatio || 1;
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        
        canvasRef.current.width = width * dpr;
        canvasRef.current.height = height * dpr;
        
        const context = canvasRef.current.getContext('2d');
        if (context) {
          context.scale(dpr, dpr);
        }
        render();
      }
    };

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext('2d');
      if (!context) return;

      const dpr = window.devicePixelRatio || 1;
      const displayWidth = canvas.width / dpr;
      const displayHeight = canvas.height / dpr;

      const index = Math.round(currentIndex.get());
      const img = images[index];

      if (img && img.naturalWidth > 0) {
        context.clearRect(0, 0, displayWidth, displayHeight);
        
        // "Contain" scaling: fits image within canvas while maintaining aspect ratio
        const scale = Math.min(displayWidth / img.naturalWidth, displayHeight / img.naturalHeight);
        const w = img.naturalWidth * scale;
        const h = img.naturalHeight * scale;
        const x = (displayWidth - w) / 2;
        const y = (displayHeight - h) / 2;
        
        context.drawImage(img, x, y, w, h);
      }
    };

    window.addEventListener('resize', handleResize);
    const unsubscribe = currentIndex.on('change', render);
    
    // Initial call
    if (!isLoading) {
      handleResize();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe();
    };
  }, [images, currentIndex, isLoading]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-transparent">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Hardware Frame / Border */}
        <div className="absolute inset-10 border border-white/5 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />
        </div>

        <canvas 
          ref={canvasRef} 
          className="relative z-10 w-full h-full object-contain"
          style={{ filter: 'contrast(1.1) brightness(1.1)' }}
        />

        {/* Loading / Diagnostic Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#171717]">
             <div className="w-64 h-1 border border-white/10 bg-black overflow-hidden mb-4">
                <motion.div 
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadProgress}%` }}
                />
             </div>
             <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
                LOADING_ASSETS: {loadProgress}% // BUFFERING_SEQUENCE
             </div>
          </div>
        )}

        {/* Error State: If files are 0 pixels but "loaded" or failed to load */}
        {(!isLoading && images.length > 0 && (images.every(img => img.naturalWidth === 0) || errorStatus)) && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-zinc-900/90 backdrop-blur-md p-8 text-center">
            <div className="text-white font-black text-2xl tracking-tighter mb-4 opacity-80 uppercase">Sequence_Data_Invalid</div>
            <p className="text-zinc-400 font-mono text-[10px] max-w-sm leading-relaxed uppercase tracking-widest mb-6">
              {errorStatus ? errorStatus : "No pixel data found. Files may be empty placeholders."}
            </p>
            <div className="p-4 border border-white/10 bg-black/40 text-left max-w-md">
               <p className="text-[9px] text-white/40 uppercase mb-2">Troubleshooting_Guide:</p>
               <ul className="text-[9px] text-zinc-500 space-y-1 list-disc pl-4">
                 <li>Ensure images are in <span className="text-white">public/render/</span></li>
                 <li>Filenames MUST follow <span className="text-white">Frame000001.png</span> pattern</li>
                 <li>Check if you "Uploaded" vs "Created Empty File"</li>
               </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
