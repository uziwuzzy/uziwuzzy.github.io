import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // This is fine since you're using a custom domain
  build: {
    outDir: 'dist',
  }
})