import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts',
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
