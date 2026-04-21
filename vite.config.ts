import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'photo-api',
        configureServer(server) {
          server.middlewares.use('/api/photos', (req, res, next) => {
            if (req.originalUrl && req.originalUrl.split('?')[0] !== '/api/photos') return next();
            const photoDir = path.join(__dirname, 'public/photography');
            try {
              if (!fs.existsSync(photoDir)) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify([]));
                return;
              }
              const files = fs.readdirSync(photoDir);
              const validFiles = files.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(validFiles));
            } catch (err) {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify([]));
            }
          });
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
