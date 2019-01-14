const path = require('path');

module.exports = {
    entry: './src/index.js', //原文件
    output: {
        filename: 'main.js', //输出文件
        path: path.resolve(__dirname, 'dist') //输出路径
    },
    module: {
        rules: [{ //css加载,打包进入main.js文件
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, { //image加载
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    }
};