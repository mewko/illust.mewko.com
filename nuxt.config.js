const { sourceFileArray } = require('./posts/json/list.json')

const sourceFileName2path = key => {
  const regexp = /posts\/md\/(\d\d\d\d-\d\d-\d\d)_(.*)\.md/i
  const match = key.match(regexp)

  return `${match[1]}/${match[2]}`
}

const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    return sourceFileName2path(sourceFileName)
  })
  callback(null, routes)
}

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'illust.mewko.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'illust.mewko.com' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: ['@nuxtjs/vuetify'],

  vuetify: {
    theme: {
      primary: '#999',
      secondary: '#999',
      accent: '#999',
      error: '#999'
    }
  },

  // generate: {
  //   routes: generateDynamicRoutes
  // }
}
