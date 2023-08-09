// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs')
    }
  },
})
