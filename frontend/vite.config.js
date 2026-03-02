import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Use esbuild for minification (default, no external dependency)
    minify: 'esbuild',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom']
        }
      }
    },
    // Enable source maps for debugging (optional)
    sourcemap: false,
    // Set output directory
    outDir: 'dist',
    // Asset handling
    assetsDir: 'assets',
    // Clean output directory before build
    emptyOutDir: true
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
