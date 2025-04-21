import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // or use your specific local IP address, e.g., '192.168.1.100'
    port: 3000, // You can specify any port you want
    strictPort: true, // Prevents Vite from trying to use another port if the specified one is taken
  },
});
