/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl"
      >
        <h1 className="display-title mb-10 text-brand-primary">
          Distilling complex systems <br />
          into pure <span className="text-brand-secondary opacity-50">infrastructure.</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-brand-secondary leading-relaxed mb-12 max-w-2xl mx-auto font-medium"
        >
          Senior Systems Engineer focused on distributed performance, high-frequency architecture, and cloud scalability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-8"
        >
          <a 
            href="#projects"
            className="text-lg font-semibold text-brand-accent hover:underline flex items-center gap-1 group"
          >
            Explore Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a 
            href="#contact"
            className="text-lg font-semibold text-brand-accent hover:underline flex items-center gap-1 group"
          >
            Contact
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
