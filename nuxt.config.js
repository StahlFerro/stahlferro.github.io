const ogconf = require('./config/opengraph.json');
console.log(ogconf);
const metas = Object.entries(ogconf).map(function([key, value]) {
  return { hid: key, name: key, content: value };
});
console.log(metas);

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "StahlFerro",
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: ogconf['og:description'] },
      { hid: 'theme-color', name: 'theme-color', content: "#5595FF"},
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
      ...metas,
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/bulmamods.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/css/fontawesome-all.min.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Share+Tech|Share+Tech+Mono'},
    ]
  },
  // css: ['~/css/bulmamods.css'],
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
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

