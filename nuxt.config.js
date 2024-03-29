const ogconf = require('./config/opengraph.json');
console.log("Loading ogconf...");
console.log(ogconf);
const metas = Object.entries(ogconf).map(function([key, value]) {
  return { hid: key, name: key, content: value };
});
// console.log("Main meta");
// console.log(metas);

module.exports = {
  srcDir: 'src/',
  head: {
    title: "StahlFerro's Official Website",
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'StahlFerro'},
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: ogconf['og:title'] },
      { hid: 'description', name: 'description', content: ogconf['og:description'] },
      ...metas,
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'UjsrBSckAbU7fmddJOAmE2_ZOmK5dQ6wOS-hdpOjoBU'}
    ],
    link: [
      { hid: 'canonical', rel: 'canonical', href: ogconf['og:url'] },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/main.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/css/fontawesome-all.min.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand&display=swap'},
    ],
    htmlAttrs: {
      // class: "has-navbar-fixed-top"
    },
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-140998532-1' }
    ]
  },
  // css: ['~/css/bulmamods.css'],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#3370cc',
    height: '5px'
  },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/sitemap',
    // ['@nuxtjs/robots', [
    // { UserAgent: '*', Disallow: '/' },
    // { UserAgent: '*', Disallow: '/sitemap.xml'},
    // ]]
  ],
  plugins: [
    '~/plugins/vue-clipboard'
  ],
  ignore: [
    '**/components/TopNav.vue',
    '**/about/**',
    '**/contact/**',
    '**/commissions/**',
    '**/donate/**',
    '**/gallery/**',
    '**/softwares/**',
    '**/videos/**',
    '**/index-orig.vue',
    '**/wip.vue'
  ],
  sitemap: {
    hostname: 'https://stahlferro.pages.dev',
    exclude: [
      '/wip',
    ]
  },
  generate: {
    fallback: "404.html"
  },
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
  },
  target: 'static'
}
