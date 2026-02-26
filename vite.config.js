import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'glj.ljkjkf.com',
      'heyi.ljkjkf.com',
      'gjeqadmin.ljkjkf.com',
      'dibang.lklq.com'
    ]
  }
})
