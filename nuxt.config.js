const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN',
  'CTF_PERSON_ID'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)
const cmaContentful = require('contentful-management')
const cmaClient = cmaContentful.createClient({
  accessToken: ctfConfig.CTF_CMA_ACCESS_TOKEN
})

const config = {

  /*
  ** Headers of the pages
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '~/assets/prism.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful',
    '~/plugins/moment-filter',
    '~/plugins/markdown-it-plugin',
    { src: '~/plugins/vue-material' }
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
    }]
  ],

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


    generate: {
      fallback: true,
      routes() {
        return Promise.all([
          client.getEntries({
            content_type: process.env.CTF_BLOG_POST_TYPE_ID
          }),
          client.getEntries({
            content_type: 'category'
          }),
          client.getEntries({
            content_type: 'tag'
          })
        ]).then(([posts, categories, tags]) => {
          return [
            ...posts.items.map((post) => {
              return { route: `posts/${post.fields.slug}`, payload: post }
            }),
            ...categories.items.map((category) => {
              return { route: `categories/${category.fields.slug}`, payload: category }
            }),
            ...tags.items.map((tag) => {
              return { route: `tags/${tag.fields.slug}`, payload: tag }
            })
          ]
        })
      }
    },

    /*
    generate: {
      routes() {
        return Promise.all([
          // get all blog posts
          cdaClient.getEntries({
            'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
          }),
          // get the blog post content type
          cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
            .then(space => space.getContentType(ctfConfig.CTF_BLOG_POST_TYPE_ID))
        ])
          .then(([entries, postType]) => {
            return [
              // map entries to URLs
              ...entries.items.map(entry => `/blog/${entry.fields.slug}`),
              // map all possible tags to URLs
              ...postType.fields.find(field => field.id === 'tags').items.validations[0].in.map(tag => `/tags/${tag}`)
            ]
          })
      }
    },
     */
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: ctfConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  }
}

module.exports = config

