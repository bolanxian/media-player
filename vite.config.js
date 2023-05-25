import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    extensions: ['.js', '.ts', '.json', '.vue']
  },
  build: {
    target: 'esnext',
    modulePreload: { polyfill: true },
    cssCodeSplit: false,
    minify: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      },
      plugins: [{
        name: 'my-preload',
        transform(code, id) {
          if (id === '\0vite/modulepreload-polyfill') { return '' }
        }
      }]
    }
  },
  plugins: [
    vue(),
    {
      name: 'view-ui-plus',
      enforce: 'pre',
      apply: 'build',
      resolveId(source, importer, options) {
        if (source === 'view-ui-plus') { return source }
      },
      load(id) {
        if (id === 'view-ui-plus') {
          return `\
export * from 'view-ui-plus/src/components/index'
import pkg from 'view-ui-plus/package.json'
export const version = pkg.version`
        }
      }
    }
  ]
})
