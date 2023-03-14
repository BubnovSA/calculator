const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/, 
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        })
    ],
};
