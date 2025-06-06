import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from external IPs
    allowedHosts: ['kittitat.trueddns.com'], // Allow this domain
  },
})