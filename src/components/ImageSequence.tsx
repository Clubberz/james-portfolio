/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'motion/react';

interface ImageSequenceProps {
  frameCount: number;
  basePath: string; // e.g. "/render/frame_"
  extension: string; // e.g. "webp" or "png"
  className?: string;
}

export const ImageSequence: React.FC<ImageSequenceProps> = ({ 
  frameCount, 
  basePath, 
  extension,
  className 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Track scroll through the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll progress (0-1) to image index (0 - frameCount-1)
  const imageIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Pad index with zeros (e.g. 000001, 000002...)
      const paddedIndex = String(i).padStart(6, '0');
      img.src = `${basePath}${paddedIndex}.${extension}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoading(false);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount, basePath, extension]);

  // Render to canvas
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx || images.length === 0) return;

      const index = Math.round(imageIndex.get());
      const img = images[index];
      if (!img) return;

      // Clear and draw
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Hero-style scaling: cover the canvas
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Sub to motion value changes
    const unsubscribe = imageIndex.on("change", render);
    
    // Resize handler
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        render();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [images, imageIndex]);

  return (
    <div ref={containerRef} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        {isLoading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black text-white font-mono text-[10px] tracking-widest uppercase">
            Initializing Hardware... {Math.round((images.filter(i => i.complete).length / frameCount) * 100)}%
          </div>
        )}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full object-cover"
        />
        
        {/* Scrolling Instruction Overlay */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase flex flex-col items-center gap-4"
        >
          <span>Scroll to Rotate</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ top: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-white"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
