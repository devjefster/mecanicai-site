import { defineConfig } from 'vite';

export default defineConfig({
    root: '.', // default
    publicDir: 'assets', // optional; Vite handles static by default
    build: {
        outDir: 'dist',
        emptyOutDir: true
    }
});
