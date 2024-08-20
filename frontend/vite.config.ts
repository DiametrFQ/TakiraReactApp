import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    https: {
      key: fs.readFileSync('./ssl.key.dev'),
      cert: fs.readFileSync('./ssl.csr.dev')
    }
  }
})
