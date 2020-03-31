const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        home: "./src/JS/home.js",
        blog: "./src/JS/home.js",
        about: "./src/JS/about.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        //pubicPath: '/dist'
      },
      module: {
          rules: [
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                       test: /\.(jpg|JPG|jpeg|PNG|png|gif|mp3|svg|ttf|woff2|woff|eot)$/,
                       use: [{
                        loader: 'file-loader',
                        options:{
                          name:'[name].[ext]',
                          outputPath: 'img/',
                          publicPath: 'img/'
                        }
                       },
                     
                      ],
             },
             {
               test:/\.html$/,
               use: ['html-loader']
             },
          ]
      },
      plugins:[
        new HtmlWebPackPlugin({
          template: 'src/HTML/home.html',
          filename: 'home.html',
          chunks: ['home']
        }),
        new HtmlWebPackPlugin({
          template: 'src/HTML/blog.html',
          filename: 'blog.html',
          chunks: ['blog']
        }),
        new HtmlWebPackPlugin({
          template: 'src/HTML/about.html',
          filename: 'about.html',
          chunks: ['about']
        })
      ],
      devServer: {
        port: 3454,
        contentBase: path.join(__dirname, 'dist'), 
        inline: true,
        hot: true,
      },
    }