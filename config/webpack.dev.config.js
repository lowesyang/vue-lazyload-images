var webpack=require("webpack");
var path=require("path");

module.exports={
    entry: {
        example:'./example/index'
    },
    output:{
        libraryTarget:'umd',
        library:'[name]',
        path:path.resolve(__dirname,'..','dist'),
        publicPath:'/dist/',
        filename:'[name].js',
    },
    module:{
        rules:[
            {
                test:/\.js[x]?$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx'],
        alias:{
            'vue$':'vue/dist/vue.min.js'
        }
    },
    plugins:[]
}