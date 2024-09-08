import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // This makes the server accessible externally
    port: 3000, // Or any other port you prefer
  },
  plugins: [react()],
})
