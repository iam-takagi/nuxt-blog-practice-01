const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)
const cmaContentful = require('contentful-management')
const cmaClient = cmaContentful.createClient({
  accessToken: ctfConfig.CTF_CMA_ACCESS_TOKEN
})

const config = {

  mode: 'universal',

  /*
  ** Headers of the pages
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      //{ hid: 'og:description', property: 'og:description',content: process.env.npm_package_description || ''  },
      { hid: 'og:url', property: 'og:url', content: 'https://mctech.life/' },
      { hid: 'og:title', property: 'og:title', content: 'Miencraft Tech Portal JP' },
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:image', property: 'og:image', content: 'https://i.imgur.com/l6uYFqI.png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Miencraft Tech Portal JP' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://platform.twitter.com/widgets.js'},
      {src: 'https://just-comments.com/w2.js'}
    ]
  },

  router: {
    middleware: ['getContentful']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
   
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful',
    '~/plugins/moment-filter',
    '~/plugins/markdown-it-plugin',
    '~/plugins/vue-material',
    '~/plugins/prism'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-fontawesome',
    ['@nuxtjs/moment', ['ja']],
    ['@nuxtjs/google-analytics', {
      id: 'UA-157025064-1'
    }],
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-7932483299460648'
    }],
    '@nuxtjs/pwa'
  ],

  manifest: {
    name: "Minecraft Tech Portal JP",
    title: "Minecraft Tech Portal JP",
    'og:title': 'Minecraft Tech Portal JP',
    description: 'Minecraft Tech Portal JP',
    'og:description': 'Minecraft Tech Portal JP',
    lang: 'ja',
  },

  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true,  // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, { isDev }) {
      if (isDev && process.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
    ],

  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: ctfConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  }
}

module.exports = config

