const port=process.env.PORT || 8080 ;
const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './src/index.js',

    output:{

        path:path.join(__dirname,"/dist"),
        filename:"main.[fullhash].js"
    },
    module:{

        rules:[

            {
                test:/\.(js|css|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
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