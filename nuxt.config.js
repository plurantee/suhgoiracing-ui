export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'SUHGOI',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'bootstrap/dist/css/bootstrap.min.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: 'static/js/bootstrap.bundle.min.js', mode: 'client' }
    ],
    static: {
      prefix: false
    },
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/apollo'
    ],

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://suhgoiracing-blog.herokuapp.com/graphql'
            }
        }
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/markdownit',
    ],

    markdownit: {
        runtime: true // Support `$md()`
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
