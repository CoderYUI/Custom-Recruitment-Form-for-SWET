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
      // Add other allowed hosts (for testing purposes)
    ]
  }
})
