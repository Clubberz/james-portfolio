import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ImageSequenceProps {
  frameCount?: number; // Now optional
  basePath: string;
  extension?: string;
}

export const ImageSequence: React.FC<ImageSequenceProps> = ({ 
  frameCount: initialFrameCount, 
  basePath, 
  extension = 'png' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [frameCount, setFrameCount] = useState<number>(initialFrameCount || 0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Use state for frame count to allow dynamic updates
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, Math.max(0, frameCount - 1)]);

  useEffect(() => {
    let active = true;
    
    const preLoadImages = async () => {
      // 1. Detect Padding
      const detectPadding = async () => {
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
        return 6;
      };

      const padding = await detectPadding();
      const loadedImages: HTMLImageElement[] = [];
      let currentBatchStart = 1;
      const batchSize = 24; // Load in parallel chunks for speed
      let foundEnd = false;

      while (!foundEnd && active) {
        const batchPromises: Promise<{img: HTMLImageElement, index: number, success: boolean}>[] = [];
        
        for (let i = 0; i < batchSize; i++) {
          const index = currentBatchStart + i;
          // Optimization: If initialFrameCount is provided, don't overshoot significantly
          if (initialFrameCount && index > initialFrameCount) {
             foundEnd = true;
             break;
          }

          batchPromises.push(new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve({ img, index, success: true });
            img.onerror = () => resolve({ img, index, success: false });
            img.src = `${basePath}${index.toString().padStart(padding, '0')}.${extension}`;
          }));
        }

        const results = await Promise.all(batchPromises);
        
        // Find the first failure
        const failedIndex = results.findIndex(r => !r.success);
        
        if (failedIndex !== -1) {
          // End of sequence found
          for (let i = 0; i < failedIndex; i++) {
            loadedImages.push(results[i].img);
          }
          foundEnd = true;
        } else {
          // Entire batch succeeded
          results.forEach(r => loadedImages.push(r.img));
          currentBatchStart += batchSize;
          
          // Update partial state so user sees something while loading
          if (loadedImages.length > 0) {
            setImages([...loadedImages]);
            setFrameCount(loadedImages.length);
          }
        }

        // Safety cap
        if (currentBatchStart > 500) break; 
      }

      if (active) {
        setImages(loadedImages);
        setFrameCount(loadedImages.length);
        setIsLoading(false);
        setLoadProgress(100);
        
        if (loadedImages.length === 0) {
          setErrorStatus("No images found in /public/render/. Please check filenames.");
        }
      }
    };

    preLoadImages();
    return () => { active = false; };
  }, [basePath, extension, initialFrameCount]);

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
    <div ref={containerRef} className="relative h-[180vh] w-full bg-transparent">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
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
