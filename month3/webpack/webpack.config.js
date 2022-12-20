const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    entry:'./src/index.js',
    output:{
        filename:'awesome.js',
        path:path.resolve(__dirname,'dist'),
    },
    plugins:[new HtmlWebpackPlugin()],
    mode: 'none'
}

