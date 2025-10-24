import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  plugins: [react(), componentTagger()], // Include componentTagger
  root: '.',
  base: process.env.VITE_BASE_PATH || "/haggllogistics-mark1",
  build: {
    outDir: 'dist', // Vercel expects build output here
    sourcemap: true, // Optional: for debugging
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});