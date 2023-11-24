import { defineConfig, createFilter } from 'vite'
import vue from '@vitejs/plugin-vue'

const externalAssets = (() => {
  const reg = /\/(ionicons)-[\da-f]{8}\.((?!woff2)\S+)$/
  return {
    renderBuiltUrl(fileName, { type, hostId, hostType }) {
      if (hostType === 'css') {
        const m = fileName.match(reg)
        if (m != null) { return `data:text/plain,${m[1]}.${m[2]}` }
      }
      return { relative: true }
    },
    plugin: {
      name: 'external-assets',
      generateBundle(options, bundle) {
        for (const fileName of Object.keys(bundle)) {
          const m = fileName.match(reg)
          if (m != null) { delete bundle[fileName] }
        }
      }
    }
  }
})()

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'mpa',
  root: 'src',
  base: './',
  publicDir: '../public',
  cacheDir: '../node_modules/.vite',
  resolve: {
    extensions: ['.js', '.ts', '.json', '.vue']
  },
  experimental: { renderBuiltUrl: externalAssets.renderBuiltUrl },
  build: {
    outDir: '../dist',
    emptyOutDir: false,
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
        transform: {
          order: 'post',
          handler(code, id) {
            if (id === '\0vite/preload-helper') {
              return `export const __vitePreload = ''`
            }
            if (id === '\0vite/modulepreload-polyfill') { return '' }
            if (code.includes('__vitePreload(')) {
              return code.replace(/__vitePreload\(\(\) => ([^,]+),__VITE_IS_MODERN__\?"__VITE_PRELOAD__"\:void 0,import\.meta\.url\)/, '$1')
            }
          }
        }
      }]
    }
  },
  plugins: [
    vue(),
    externalAssets.plugin,
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
    },
    (() => {
      const filter = createFilter('**/*.vue.js', 'node_modules/**')
      const reg = /(?<=[^\w$])__LINE__(?=[^\w$])/, mapFn = (code, line) => code.replace(reg, line)
      return {
        name: 'vue-rander-cache',
        enforce: 'pre',
        transform(code, id) {
          if (!filter(id)) { return }
          return code.split('\n').map(mapFn).join('\n')
        }
      }
    })(),
    {
      name: 'spin-img',
      enforce: 'pre',
      transform(code, id) {
        if (id.endsWith('?spin-img')) {
          code = code.replace(/\/\*<base64>\*\/`([\s\S]*?)`\/\*<\/base64>\*\//g, (_, m) => {
            m = m.replace(/\s*\n\s*/g, '')
            m = `data:image/svg+xml;base64,${Buffer.from(m, 'utf-8').toString('base64')}`
            return JSON.stringify(m)
          })
          return code
        }
      }
    },
    {
      name: 'html-transform',
      transformIndexHtml(html, { chunk, bundle }) {
        if (chunk == null || bundle == null) { return }
        return {
          html: html.replace(/(?<=\<script type="module"\s+)crossorigin\s+/g, ''),
          tags: [...function* () {
            for (const href of chunk.dynamicImports) {
              yield {
                tag: 'link',
                attrs: { rel: 'modulepreload', href: `./${href}` },
                injectTo: 'head'
              }
            }
          }()]
        }
      }
    }
  ]
})
