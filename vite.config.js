import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mars3dPlugin } from 'vite-plugin-mars3d'
import { fileViewerRenderers } from '@file-viewer/vite-plugin'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mars3dPlugin(),
    fileViewerRenderers({ copyAssets: false })
  ],
  server: {
    allowedHosts: [
      '.ljkjkf.com',
      '.hljsjtgj.com',
      '.lklq.com',
    ]
  }
})