var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['./src/app/index.js'],
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve : [
        '.html','.js', '.jsx'
    ],
    module:{
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [new RegExp(path.join(__dirname, 'src'))]
            }
        ],
        loaders:[
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: "babel-loader",
                presets: ['es2015', 'react'],
                exclude: /(node_modules|bower_components)/
            },
            {   test: /\.html$/, loader: "raw-loader"   }
        ]
    },
    plugins:[new HtmlWebpackPlugin(
        {
            template: path.join(__dirname,'src/index.html'),
            inject:true,
            filename: path.join(__dirname,'dist/index.html')
        }
    )]
};