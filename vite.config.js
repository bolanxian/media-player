import { defineConfig, createFilter } from 'vite'
import vue from '@vitejs/plugin-vue'
import { bindScript } from 'bind-script/plugin.vite'

const viewUiPlus = () => {
  const filter = { id: /^view-ui-plus$/ }
  return {
    name: 'view-ui-plus',
    enforce: 'pre',
    apply: 'build',
    resolveId: { filter, handler(id) { return id } },
    load: { filter, handler(id) { return `export * from 'view-ui-plus/src/components/index'` } },
    transform: {
      filter: { id: /\/node_modules\/view-ui-plus\/src\/utils\/dom\.js$/ },
      handler(code, id) { return `export { on, off } from 'bind:utils'` }
    }
  }
}

const destroyBuildImportAnalysis = () => {
  const name = 'Destroy `vite:build-import-analysis`'
  const preloadHelperIdRE = /^\0vite\/preload-helper\.js$/
  const filter = { id: preloadHelperIdRE }
  const dynamicImportPrefixRE = /(?<!\w)__vitePreload(?=\s*\()/
  const transformChunkRE = /(?<!\w)__vitePreload\(\(\) => ([^,]+?),\s*__VITE_PRELOAD__,\s*import\.meta\.url\)/g
  return {
    name,
    enforce: 'pre',
    apply: 'build',
    resolveId: { filter, handler(id) { return id } },
    load: { filter, handler(id) { return `export let __vitePreload` } },
    renderChunk(code, chunk) {
      if (!dynamicImportPrefixRE.test(code)) { return }
      return code.replace(transformChunkRE, '$1')
    }
  }
}

const externalAssets = () => {
  const reg = /\/(ionicons)-[-\w]{8}\.(\S+?)(?:$|\?)/
  const fontType = 'woff2'
  const inject = []
  const renderBuiltUrl = (fileName, { type, hostId, hostType }) => {
    if (type === 'asset' && hostType === 'css') {
      const m = fileName.match(reg)
      if (m != null) {
        if (m[2] !== fontType) { return 'about:invalid' }
        const href = `./${fileName}`
        inject[inject.length] = {
          tag: 'link', injectTo: 'head', attrs: {
            rel: 'preload', crossorigin: !0, href,
            as: 'font', type: `font/${fontType}`
          }
        }
      }
    }
    return { relative: true }
  }
  return {
    name: 'external-assets',
    apply: 'build',
    config(config, env) {
      return { experimental: { renderBuiltUrl } }
    },
    generateBundle(options, bundle) {
      for (const fileName of Object.keys(bundle)) {
        const m = fileName.match(reg)
        if (m != null && m[2] !== fontType) { delete bundle[fileName] }
      }
    },
    transformIndexHtml(html, ctx) { return inject }
  }
}

const renderCache = () => {
  const filterFn = createFilter('**/*.vue.js', 'node_modules/**')
  const filter = { id: { include: /\.vue\.js$/, exclude: /node_modules\// } }
  const reg = /(?<=[^\w$])__LINE__(?=[^\w$])/, mapFn = (code, line) => code.replace(reg, line)
  return {
    name: 'render-cache',
    enforce: 'pre',
    transform: {
      filter, handler(code, id) {
        if (!filterFn(id)) { return }
        return code.split('\n').map(mapFn).join('\n')
      }
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
    chunkSizeWarningLimit: 1024,
    rolldownOptions: {
      treeshake: true,
      output: {
        minifyInternalExports: false
      }
    }
  },
  plugins: [
    bindScript(),
    vue(),
    viewUiPlus(),
    destroyBuildImportAnalysis(),
    externalAssets(),
    renderCache(),
    {
      name: 'spin-img',
      enforce: 'pre',
      transform: {
        filter: { id: /\?spin-img$/ },
        handler(code, id) {
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
