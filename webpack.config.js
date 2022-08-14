const { join, resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, './build'),
        filename: '[name]-[fullhash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]-[fullhash].css',
        }),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename:"about.html",
            template: './src/about.html'
        }),

    ],
    devServer: {
        port: 3003,
        static: {
directory: join (__dirname, 'src')
        }
    }
};