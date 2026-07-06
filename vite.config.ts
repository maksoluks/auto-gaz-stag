import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // Przywracamy ścieżkę pod GitHub Pages:
  base: '/auto-gaz-stag/',
  resolve: {
    alias: {
      // Przechwytuje błąd serwerowy i podmienia go na pustą klasę
      'node:async_hooks': path.resolve(__dirname, './mock-async-hooks.js'),
    },
  },
})
