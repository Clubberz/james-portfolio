/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-bg-light overflow-hidden">
      {/* Soft Ambient Light */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-brand-accent/5 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] bg-brand-primary/5 rounded-full blur-[140px]"
      />
    </div>
  );
};
