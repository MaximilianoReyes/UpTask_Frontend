import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@' : fileURLToPath(new URL('./src', import.meta.url))
      // Con estas importaciones se simplifican las rutas de la app y cuando detecte el @ redirigira automaticamente a la carpeta principal src
    }
  }
})
