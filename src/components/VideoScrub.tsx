import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface VideoScrubProps {
  videoSrc: string;
}

export const VideoScrub: React.FC<VideoScrubProps> = ({ videoSrc }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress for a more "fluid" feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to time
  const targetTime = useTransform(smoothProgress, [0, 1], [0, duration]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoaded(true);
    };

    const handleError = () => {
      setError(`Failed to load video: ${videoSrc}`);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
    };
  }, [videoSrc]);

  // Use a change listener to update video time
  useEffect(() => {
    const unsubscribe = targetTime.on('change', (latestTime) => {
      if (videoRef.current && isLoaded) {
        // We sync the video time to the scroll progress
        videoRef.current.currentTime = latestTime;
      }
    });

    return () => unsubscribe();
  }, [targetTime, isLoaded]);

  return (
    <div ref={containerRef} className="h-[300vh] relative w-full bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Progress Indicator */}
        <div className="absolute top-10 right-10 z-20 flex flex-col items-end">
            <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest mb-1">SCRUB_SYNC_ACTIVE</span>
            <div className="w-32 h-[2px] bg-white/5 overflow-hidden">
                <motion.div 
                    className="h-full bg-white/40"
                    style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
                />
            </div>
        </div>

        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-contain opacity-80"
          style={{
            filter: 'contrast(1.2) brightness(0.9) grayscale(0.5)',
          }}
        />

        {!isLoaded && !error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
             <div className="w-12 h-12 border-2 border-white/10 border-t-white rounded-full animate-spin mb-4" />
             <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">INITIALIZING_STREAM</span>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/90 backdrop-blur-xl p-12 text-center">
            <h3 className="text-white font-black text-2xl tracking-tighter mb-4">VIDEO_LOAD_FAILURE</h3>
            <p className="font-mono text-[10px] text-zinc-500 max-w-sm uppercase tracking-widest leading-relaxed mb-8">
                {error}. <br/> Ensure your file is in <span className="text-white">public/render/render.mp4</span>
            </p>
            <div className="p-4 border border-white/5 bg-black/40 text-left max-w-sm">
                <p className="text-[9px] text-white/20 uppercase mb-2">Technical_Requirements:</p>
                <ul className="text-[9px] text-zinc-500 space-y-1 list-disc pl-4 uppercase tracking-tighter">
                   <li>Format: h.264 MP4 (Web Optimized)</li>
                   <li>Resolution: 1080p or 4K</li>
                   <li>Frames: 30-60 FPS</li>
                </ul>
            </div>
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black" />
      </div>
    </div>
  );
};
