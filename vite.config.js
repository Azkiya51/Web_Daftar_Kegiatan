import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' agar hasil build bisa dibuka dari subfolder website pribadi
// (contoh: https://namaanda.com/daftar-kegiatan/)
export default defineConfig({
  plugins: [react()],
  base: './',
})
