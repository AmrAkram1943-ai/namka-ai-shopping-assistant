import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined
          }

          if (id.includes('framer-motion')) {
            return 'animation'
          }

          if (id.includes('axios')) {
            return 'http'
          }

          if (id.includes('lucide-react')) {
            return undefined
          }

          if (id.includes('/node_modules/react/') || id.includes('/node_modules/react-dom/')) {
            return 'react'
          }

          return 'vendor'
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
