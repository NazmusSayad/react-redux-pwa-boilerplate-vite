import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@honkhonk/vite-plugin-svgr'
import { VitePWA } from 'vite-plugin-pwa'
const isDevMode = process.env.NODE_ENV !== 'production'
const config = {
  static: 'static',
  assets: 'assets'
}

const server = {
  host: 'localhost',
  port: 3000,
}

const build = {
  rollupOptions: {
    output: {
      assetFileNames: file => {
        const ext = file.name.split('.').at(-1)
        const outputFolder = ext === 'css' || ext === 'js' ? '' : config.assets + '/'
        return `${config.static}/${outputFolder}[name]-[hash][extname]`
      },
      entryFileNames: `${config.static}/[name]-[hash].js`,
      chunkFileNames: `${config.static}/chunk-[name]-[hash].js`,
    },
  },
}

const resolve = {
  alias: {
      '@src': path.resolve('./src'),
      '@hooks': path.resolve('./src/hooks'),
      '@store': path.resolve('./src/store'),
      '@slice': path.resolve('./src/store/slice'),
      '@assets': path.resolve('./src/assets'),
      '@components': path.resolve('./src/components'),
      '@layouts': path.resolve('./src/layouts'),
      '@pages': path.resolve('./src/pages'),
      '@abstracts': path.resolve('./src/styles/abstracts'),
  },
}

const plugins = [react(), svgr.default()]

const css = {
  modules: {
    generateScopedName: isDevMode
      ? '[local]___[name]--[hash:base64:5]'
      : '[hash:base64]',
  },
}

isDevMode ||
  plugins.push(
    VitePWA({
      manifest: false,
      workbox: {
        globPatterns: ['**'],
        maximumFileSizeToCacheInBytes: 2_000_000,
      },
    })
  )

export default defineConfig({ server, build, plugins, css })
