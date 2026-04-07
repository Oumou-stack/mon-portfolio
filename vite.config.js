import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/mon-portfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})