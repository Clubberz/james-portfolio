import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, UploadCloud } from 'lucide-react';

interface PhotoInfo {
  id: number;
  src: string;
  filename: string;
}

export const Photography: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [photos, setPhotos] = useState<PhotoInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Fetch photos from the local dev server plugin
    fetch('/api/photos')
      .then(res => res.json())
      .then(files => {
        const loadedPhotos = files.map((filename: string, index: number) => ({
          id: index + 1,
          src: `/photography/${filename}`,
          filename
        }));
        setPhotos(loadedPhotos);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load photos:", err);
        setLoading(false);
      });
  }, []);

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto === null) return;
      if (e.key === 'Escape') setSelectedPhoto(null);
      if (e.key === 'ArrowRight') navigateModal(1);
      if (e.key === 'ArrowLeft') navigateModal(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, photos]);

  const navigateModal = (direction: number) => {
    setSelectedPhoto((prev) => {
      if (prev === null) return null;
      const nextIndex = prev + direction;
      if (nextIndex < 0) return photos.length - 1;
      if (nextIndex >= photos.length) return 0;
      return nextIndex;
    });
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-40 pb-24 relative z-10"
    >
      <div className="container-tight">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 leading-none">
            Lens.
          </h1>
          <p className="text-lg text-white/40 font-medium">
            Visual documentation of the engineering process and track telemetry.
          </p>
        </div>

        {loading ? (
             <div className="w-full flex justify-center py-32 border border-white/10 border-dashed rounded-3xl bg-white/5">
               <div className="text-center font-mono opacity-50 uppercase tracking-widest text-xs">Loading Imagery...</div>
             </div>
        ) : photos.length === 0 ? (
          <div className="w-full flex justify-center py-32 border border-white/10 border-dashed rounded-3xl bg-white/5">
            <div className="text-center max-w-sm">
              <UploadCloud className="w-12 h-12 mx-auto text-white/20 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Awaiting Uplink</h3>
              <p className="text-white/40 font-mono text-xs leading-loose">
                Upload your raw `.jpg`, `.png`, or `.webp` files via the file explorer into the <code className="bg-black/50 px-2 py-1 rounded text-white/70">public/photography/</code> directory to automatically populate this grid.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
            {photos.map((photo, index) => {
              // Pseudo-randomly make every 4th photo span 2 rows to keep the layout dynamic
              const isTall = index % 4 === 1;
              
              return (
                <motion.div 
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (index % 10) * 0.05 }}
                  className={`relative group cursor-pointer overflow-hidden bg-zinc-900 border border-white/5 ${isTall ? 'row-span-2' : ''}`}
                  onClick={() => setSelectedPhoto(index)}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.filename} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 filter grayscale-[0.3] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover shadow just for aesthetics since captions are gone */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-inset ring-brand-accent/0 group-hover:ring-brand-accent/50" />
                </motion.div>
              )
            })}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto !== null && photos[selectedPhoto] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col"
          >
            {/* Modal Header */}
            <div className="absolute top-0 w-full p-6 flex justify-between items-center z-10 text-white/50">
              <span className="font-mono text-[10px] uppercase tracking-widest">
                {photos[selectedPhoto].filename.toUpperCase()} // {selectedPhoto + 1} OF {photos.length}
              </span>
              <button 
                onClick={() => setSelectedPhoto(null)} 
                className="p-2 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body / Image */}
            <div className="flex-1 flex items-center justify-center p-6 md:p-16 relative">
               <button 
                 onClick={(e) => { e.stopPropagation(); navigateModal(-1); }}
                 className="absolute left-4 md:left-10 p-3 rounded-full text-white/30 hover:text-white hover:bg-white/10 transition-colors hidden md:block"
               >
                 <ChevronLeft className="w-8 h-8" />
               </button>
               
               <motion.img 
                 key={selectedPhoto}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.3 }}
                 src={photos[selectedPhoto].src}
                 alt={photos[selectedPhoto].filename}
                 className="max-h-full max-w-full object-contain shadow-2xl"
                 referrerPolicy="no-referrer"
               />

               <button 
                 onClick={(e) => { e.stopPropagation(); navigateModal(1); }}
                 className="absolute right-4 md:right-10 p-3 rounded-full text-white/30 hover:text-white hover:bg-white/10 transition-colors hidden md:block"
               >
                 <ChevronRight className="w-8 h-8" />
               </button>
            </div>

            {/* Mobile tap targets for navigation */}
            <div className="absolute inset-y-0 left-0 w-1/3 md:hidden" onClick={() => navigateModal(-1)} />
            <div className="absolute inset-y-0 right-0 w-1/3 md:hidden" onClick={() => navigateModal(1)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};
