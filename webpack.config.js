const port=process.env.PORT || 8080 ;
const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const MiniCssExtractPlugin= require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin =require('optimize-css-assets-webpack-plugin');
const CopyPlugin=require("copy-webpack-plugin");

module.exports={
    // single-entry-point
    entry: './src/index.js',
   
    

    // multiple-entry-point
    // entry:{
    //     main:'./src/App.js',
    //     //vendor:'./s'
    // },

    output:{

        path:path.join(__dirname,"/dist"),
        filename:"main.js",
        // chunkFilename:'[name].bundle.[fullhash].js', //with hash name
        chunkFilename:'[name].bundle.js', //without hash name
        
    },
    module:{

        rules:[

            {
                test:/\.(js|css|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:[

                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader",
                  
                ]
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                  // Disables attributes processing
                  sources: false,
                },
              },

          {
            test:/\.(svg|png|jpg)$/,
            use:{
                loader:"file-loader",
                options:{

                    name:'[name].[ext]',
                    outputPath:'images'
                }
            }
          }
        ]
    },



    plugins: [
        new HtmlWebpackPlugin({
            template:'src/index.html',
            minify:{

                removeAttributeQuotes:true,
                collapseWhitespace:true,
                removeComments:true,
            }
        }),
        new OptimizeCssAssetsPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename:"[name].[fullhash].css"}),
    new CopyPlugin({

        patterns:[
            {from: 'public',to:'images'}
        ]
    })

],
    devServer:{
        host:'localhost',
        port:port,
        open:true
    }
}