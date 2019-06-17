const pkg = require('./package')

module.exports = {
	mode: 'universal',
	/*env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
	},*/
	
	/*
	 ** Headers of the page
	 */
	head: {
		title: pkg.name,
		meta: [
			{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: pkg.description
			}
    ],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			}
    ],
		script: [
	   { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
	]
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '#fff'
	},

	/*
	 ** Global CSS
	 */
	css: [
    'element-ui/lib/theme-chalk/index.css',
	'~/assets/main.scss',
	'~/assets/font-awesome/css/font-awesome.min.css',
    '~/assets/iconfont/iconfont.css',
    
  ],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
    {
      src:'~plugins/element-ui',
      ssr: true
	  },
        {
      src:'~plugins/echarts',
      ssr: true
	  },
        {
          src:'~plugins/vue-aplayer',
		  ssr: true
	  },
        {
          src:'~/assets/iconfont/iconfont.js',
		  ssr: false
	  }
  ],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
	'@gauseen/nuxt-proxy'
  ],
	proxyTable: {

        '/netease': { target: 'http://api.bzqll.com/music', ws: false },
         '/video': { target: 'https://3g.163.com/touch/nc/api', ws: false }
        

	},
	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Run ESLint on save

		}
	}
}