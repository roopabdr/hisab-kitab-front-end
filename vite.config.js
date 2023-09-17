import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hisab-kitab-front-end",
  plugins: [react()],
  server: {
    proxy: {
      '/saveData': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  }
})
