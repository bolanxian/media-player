import { defineConfig, createFilter } from 'vite'
import vue from '@vitejs/plugin-vue'
import { bindScript } from 'bind-script/plugin.vite'

const externalAssets = () => {
  const reg = /\/(ionicons)-[-\w]{8}\.((?!woff2)\S+)$/
  return {
    name: 'external-assets',
    apply: 'build',
    config(config, env) {
      return {
        experimental: {
          renderBuiltUrl(fileName, { type, hostId, hostType }) {
            if (type === 'asset' && hostType === 'css') {
              const m = fileName.match(reg)
              if (m != null) { return 'about:invalid' }
            }
            return { relative: true }
          }
        }
      }
    },
    generateBundle(options, bundle) {
      for (const fileName of Object.keys(bundle)) {
        const m = fileName.match(reg)
        if (m != null) { delete bundle[fileName] }
      }
    }
  }
}
const renderCache = () => {
  const filter = createFilter('**/*.vue.js', 'node_modules/**')
  const reg = /(?<=[^\w$])__LINE__(?=[^\w$])/, mapFn = (code, line) => code.replace(reg, line)
  return {
    name: 'render-cache',
    enforce: 'pre',
    transform(code, id) {
      if (!filter(id)) { return }
      return code.split('\n').map(mapFn).join('\n')
    }
  }
}

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
  build: {
    outDir: '../dist',
    emptyOutDir: false,
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: false,
    minify: false,
    rollupOptions: {
      treeshake: 'smallest',
      output: {
        minifyInternalExports: false
      },
      plugins: [{
        name: 'my-preload',
        transform: {
          order: 'post',
          handler(code, id) {
            if (id.startsWith('\0vite/preload-helper')) {
              return `export let __vitePreload`
            }
            if (id.startsWith('\0vite/modulepreload-polyfill')) { return '' }
            if (code.includes('__vitePreload(')) {
              return code.replace(/__vitePreload\(\(\) => ([^,]+?),__VITE_IS_MODERN__\?"?__VITE_PRELOAD__"?\:void 0,import\.meta\.url\)/, '$1')
            }
          }
        }
      }]
    }
  },
  plugins: [
    vue(),
    externalAssets(),
    bindScript(),
    renderCache(),
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
      },
      transform(code, id) {
        if (id.endsWith('/node_modules/view-ui-plus/src/utils/dom.js')) {
          return `export { on, off } from 'bind:utils'`
        }
      }
    },
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
