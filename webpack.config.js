const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devServer = require('./webpack/devServer');
const css = require('./webpack/css');
const sass = require('./webpack/sass');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');


PATHS = {
    src: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'build')
};


const common = {
    entry: {
        'index': PATHS.src + '/js/index.js',
        'about': PATHS.src + '/js/about.js',
    },
    output: {
        path: PATHS.build,
        filename: 'js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.src + '/pug/pages/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['about'],
            template: PATHS.src + '/pug/pages/about.pug'
        })
    ]
};

module.exports = function() {
    return merge([
        common,
        pug(),
        devServer(),
        sass(),
        css(),
        images(),
        fonts(),
    ]);
};