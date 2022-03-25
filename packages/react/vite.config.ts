import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import pkg from './package.json'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.tsx',
      name: pkg.name,
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
      ]
    }
  },
  esbuild: {
    minify: true,
    keepNames: true,
    legalComments: 'none'
  }
})
