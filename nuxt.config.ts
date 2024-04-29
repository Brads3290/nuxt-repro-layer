import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
console.warn('current dir', currentDir);

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [join(currentDir, "node_modules", "@nuxtjs/tailwindcss")]
})