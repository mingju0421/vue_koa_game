const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const isProduction = process.env.NODE_ENV === 'production';
const cdn = {
    css: [
        "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
    ],
    js: [
        'https://cdn.jsdelivr.net/npm/vue/dist/vue.js', 
        'https://unpkg.com/vuex', 
        'https://unpkg.com/vue-router/dist/vue-router.js',
        "https://unpkg.com/element-ui/lib/index.js",
    ]
}
module.exports = {
    productionSourceMap: false,
    configureWebpack: config => {
        if (isProduction) {
            config.externals = {
                'vue': 'Vue',
                'vuex': 'Vuex',
                'vue-router': 'VueRouter',
                'element-ui': 'ELEMENT'
            }
        }
        
        if (process.env.NODE_ENV !== 'production') return
        const plugins = [];

        // Begin 生成 gzip 压缩文件
        plugins.push(
            new CompressionWebpackPlugin({
                filename: "[path].gz[query]",
                algorithm: "gzip",
                test: productionGzipExtensions,
                threshold: 10240,
                minRatio: 0.8
            })
        );
        // End 生成 gzip 压缩文件
        
        config.plugins = [...config.plugins, ...plugins];

    },
    chainWebpack: config => {
        console.log(config)
        if (isProduction) {
            config.plugin('html')
            .tap(args => {
                args[0].cdn = cdn;
                return args
            })
        }
    }
    
}