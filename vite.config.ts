import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fixReactVirtualized from 'esbuild-plugin-react-virtualized'
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros'],
      },
    }),
    dynamicImport(),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  build: {
    outDir: './dist',
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [fixReactVirtualized],
    },
  },
})
