import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - cytatys-frontend',
    title: 'cytatys-frontend',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website with quotations by Jakub Sielewicz' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { href: "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap", rel: "stylesheet" },
      { href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;700&display=swap", rel: "stylesheet" }
    ]
  },

  server: {
    host: process.env.HOST,
    port: process.env.PORT,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/style.scss'
  ],
  
  js: [
    '@/assets/js/bootstrap.min.js'
  ],

  fontawesome: {
    icons: {
      solid: true,
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    { src: '~/plugins/intervalToken.js', ssr: false},
    '@/plugins/bootstrap-vue.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/fontawesome',
    //'@nuxtjs/eslint-module',
  ],

  /*
  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss',
    ]
  },*/

  ssr: true,
  target: 'server',
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    ['cookie-universal-nuxt', { alias: 'cookiz'}],
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  axios: {
    proxy: true,
    credentials: true
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  proxy: {
    '/api/': process.env.BASE_URL,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  }
}
