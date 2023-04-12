const common=require('./webpack.config');
const {merge}=require('webpack-merge');
const path=require("path");
module.exports=merge(common,{

    output:{

        path:path.join(__dirname,"/dist"),
        filename:"main.js",
        // chunkFilename:'[name].bundle.[fullhash].js', //with hash name
        chunkFilename:'[name].bundle.[fullhash].js', //without hash name
        
    },
   
})