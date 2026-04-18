import React, { useEffect, useRef, useState } from 'react';

interface HoverImageSequenceProps {
  basePath: string;
  extension?: string;
}

export const HoverImageSequence: React.FC<HoverImageSequenceProps> = ({ 
  basePath, 
  extension = 'png' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [frameCount, setFrameCount] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Use a ref for current frame to avoid re-triggering effects during animation loop
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  
  const FPS = 30; // Control spin speed

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
      const batchSize = 24; 
      let foundEnd = false;

      while (!foundEnd && active) {
        const batchPromises: Promise<{img: HTMLImageElement, index: number, success: boolean}>[] = [];
        
        for (let i = 0; i < batchSize; i++) {
          const index = currentBatchStart + i;
          batchPromises.push(new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve({ img, index, success: true });
            img.onerror = () => resolve({ img, index, success: false });
            img.src = `${basePath}${index.toString().padStart(padding, '0')}.${extension}`;
          }));
        }

        const results = await Promise.all(batchPromises);
        const failedIndex = results.findIndex(r => !r.success);
        
        if (failedIndex !== -1) {
          for (let i = 0; i < failedIndex; i++) {
            loadedImages.push(results[i].img);
          }
          foundEnd = true;
        } else {
          results.forEach(r => loadedImages.push(r.img));
          currentBatchStart += batchSize;
          if (loadedImages.length > 0) {
            setImages([...loadedImages]);
            setFrameCount(loadedImages.length);
          }
        }
        if (currentBatchStart > 500) break; 
      }

      if (active) {
        setImages(loadedImages);
        setFrameCount(loadedImages.length);
      }
    };

    preLoadImages();
    return () => { active = false; };
  }, [basePath, extension]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = canvas.width / dpr;
    const displayHeight = canvas.height / dpr;

    const img = images[index];

    if (img && img.naturalWidth > 0) {
      context.clearRect(0, 0, displayWidth, displayHeight);
      
      // "Cover" scaling for the project card background
      const scale = Math.max(displayWidth / img.naturalWidth, displayHeight / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const x = (displayWidth - w) / 2;
      const y = (displayHeight - h) / 2;
      
      context.drawImage(img, x, y, w, h);
    }
  };

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
        drawFrame(frameRef.current);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial sizing

    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  useEffect(() => {
    if (!isHovered || frameCount === 0) return;

    const animate = (time: number) => {
      if (time - lastTimeRef.current > 1000 / FPS) {
        frameRef.current = (frameRef.current + 1) % frameCount;
        drawFrame(frameRef.current);
        lastTimeRef.current = time;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isHovered, frameCount, images]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full cursor-ew-resize overflow-hidden bg-[#171717]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <canvas 
        ref={canvasRef} 
        className="relative z-10 w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        style={{ filter: 'contrast(1.1) brightness(1.1)' }}
      />
      {frameCount === 0 && (
          <div className="absolute inset-0 flex items-center justify-center opacity-50 z-20">
             <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white">LOADING_MODEL...</div>
          </div>
      )}
    </div>
  );
};
