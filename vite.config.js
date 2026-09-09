import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mars3dPlugin } from 'vite-plugin-mars3d'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mars3dPlugin()
  ],
  server: {
    allowedHosts: [
      '.ljkjkf.com',
      '.hljsjtgj.com',
      '.lklq.com',
    ]
  }
})