import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'Fragment',
    minify: true,
    legalComments: 'none',
    charset: 'utf8'
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es']
    }
  }
})
