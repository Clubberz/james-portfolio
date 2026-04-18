import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Palette } from 'lucide-react';

const COLORS = [
  { name: 'Pure White', hex: '#ffffff' },
  { name: 'Neon Green', hex: '#39ff14' },
  { name: 'Cyber Yellow', hex: '#e6ff00' },
  { name: 'Electric Blue', hex: '#00f0ff' },
  { name: 'Hot Pink', hex: '#ff00ff' },
  { name: 'Blood Red', hex: '#ff003c' }
];

export const ColorSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(COLORS[0].hex);

  // Apply the selected color to the CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-accent', activeColor);
  }, [activeColor]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Expanded Palette */}
      <motion.div 
        initial={false}
        animate={{ 
          width: isOpen ? 'auto' : 0, 
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.8
        }}
        className="overflow-hidden flex items-center gap-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-2 h-12"
        style={{ originX: 1 }}
      >
        {COLORS.map((color) => (
          <button
            key={color.hex}
            aria-label={`Select ${color.name} theme`}
            onClick={() => setActiveColor(color.hex)}
            className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${activeColor === color.hex ? 'border-white scale-110' : 'border-transparent'}`}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </motion.div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all shadow-xl"
        aria-label="Toggle color selector"
      >
        <Palette className="w-5 h-5" />
      </button>
    </div>
  );
};
