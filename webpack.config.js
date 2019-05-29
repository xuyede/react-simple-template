const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const config = {
    devServer : {
        contentBase : './build/',
        compress : true,
        progress : true
    },
    mode : 'development',
    entry : './src/main.js',
    output : {
        filename : 'main.js',
        path : path.resolve(__dirname, 'build')
    },
    externals : {
        'react' : 'window.React',
        'react-dom' : 'window.ReactDOM',
        'redux' : 'window.Redux'
    },
    module : {
        rules : [
            {
                test : /\.js(x)?$/, 
                use : 'babel-loader',
                exclude : /node_modules/
            }
        ]
    },
    plugins : [
        new HtmlPlugin({
            template : './public/index.html',
            filename : 'index.html',
        })
    ]
}
module.exports = config