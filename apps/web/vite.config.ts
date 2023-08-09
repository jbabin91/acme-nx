/// <reference types="vitest" />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        manualChunks: {
          radixVendor: [
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-slot',
          ],
          reactVendor: ['react', 'react-dom'],
          tailwindVendor: ['tailwind-merge', 'tailwindcss-animate'],
          tanstackVendor: ['@tanstack/react-router'],
        },
      },
    },
  },
  cacheDir: '../../node_modules/.vite/web',
  plugins: [react(), nxViteTsPaths()],
  preview: {
    host: 'localhost',
    port: 4300,
  },
  server: {
    host: 'localhost',
    port: 4200,
  },
  test: {
    cache: {
      dir: '../../node_modules/.vitest',
    },
    coverage: {
      provider: 'v8',
    },
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
