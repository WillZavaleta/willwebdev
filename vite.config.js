import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',//solucionar el problema de que no salga la pagina en blanco cuando se ejecuta el dist
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
})
