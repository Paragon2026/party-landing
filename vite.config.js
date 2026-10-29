import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served at https://findyour.party/landing (the app's vercel.json proxies
// /landing/* here), so every asset URL starts with /landing/.
export default defineConfig({
  base: '/landing/',
  plugins: [react()],
});
