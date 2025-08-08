import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: set base to '/REPO_NAME/' before building for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/james-portfolio/' // <-- change REPO_NAME to your GitHub repo name
})
