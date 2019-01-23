
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {


    mode: 'development',//production
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',  //生成打包文件名称，默认是index.html
            template: 'src/index.html'  //被打包的html模板文件名称
        }),
        new VueLoaderPlugin()
    ],
    //   webpack-dev-server 的配置  
    devServer: {
        port: "3006",
        open: true,
        host: '127.0.0.1',
        compress: true

    },
    //在production的环境下，如果url图片超过阀值，不现实警告
   performance:{
         hints:false
    },
    module: { // 所有 非.js 结尾的第三方文件类型，都可以在 module 节点中进行配置
        rules: [
            // rules 是匹配规则，如果 webpack 在打包项目的时候，发现，某些 文件的后缀名是 非 .js 结尾的
            //  webpack 默认处理不了，此时，webpack 查找 配置文件中的 module -> rules 规则数组；
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.less$/,
                // use: [{
                //     loader: "style-loader" // creates style nodes from JS strings
                // }, {
                //     loader: "css-loader" // translates CSS into CommonJS
                // }, {
                //     loader: "less-loader" // compiles Less to CSS
                // }]
                use: ["style-loader", "css-loader", "less-loader" ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      outputPath: 'images/'
                    }
                  }
                ]
              },
              {
                  test:/\.js$/,
                  exclude:/(node_modules)/,
                  use:{
                      loader:'babel-loader'
                  }
              },
              { 
                  test: /\.vue$/,
                  use: 'vue-loader' 
                }

        ]
    }









}