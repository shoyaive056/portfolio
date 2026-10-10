import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' makes every asset path relative, so the build works from any
// folder or static host (GitHub Pages project sites, Netlify, Vercel, etc.).
export default defineConfig({
  base: './',
  plugins: [react()],
});
