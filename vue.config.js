const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const isProduction = process.env.NODE_ENV === 'production';
const cdn = {
    css: ['xxx.css', 'sss.js'],
    js: ['xxx.js', 'sss.js']
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
        if (isProduction) {
            config.plugins('html')
            .tap(args => {
                args[0].cdn = cdn;
                return args
            })
        }
    }
    
}