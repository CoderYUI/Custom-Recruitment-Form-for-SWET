import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [tailwindcss(),
    react()
  ],
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'swet-form.vercel.app' // Add your deployed frontend domain here
    ],
    proxy: {
      '/api': {
        target: process.env.VITE_BACKEND_URL || 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
