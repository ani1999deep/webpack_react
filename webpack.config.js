const port=process.env.PORT || 8080 ;
const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                    "style-loader",
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

                    name:'[name].[hash].[ext]',
                    outputPath:'images'
                }
            }
          }
        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template:'src/index.html'
    })],
    devServer:{
        host:'localhost',
        port:port,
        open:true
    }
}