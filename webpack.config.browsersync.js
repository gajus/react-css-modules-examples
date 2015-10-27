var webpack,
    path,
    ExtractTextPlugin,
    WriteFilePlugin,
    devServer;

webpack = require('webpack');
path = require('path');
ExtractTextPlugin = require('extract-text-webpack-plugin');
WriteFilePlugin = require('write-file-webpack-plugin');

devServer = {
    contentBase: path.resolve(__dirname, './endpoint'),
    colors: true,
    quiet: false,
    noInfo: false,
    publicPath: '/static/',
    historyApiFallback: false,
    host: '127.0.0.1',
    port: 8000,
    hot: true
};

module.exports = {
    devtool: 'source-map',
    debug: true,
    devServer: devServer,
    context: path.resolve(__dirname, './src'),
    entry: {
        app: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client',

            './'
        ]
    },
    output: {
        path: path.resolve(__dirname, './endpoint/static'),
        filename: '[name].js',
        publicPath: devServer.publicPath
    },
    plugins: [
        new WriteFilePlugin(),
        new ExtractTextPlugin('app.css', {
            allChunks: true
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.OldWatchingPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, './src'),
                loaders: [
                    'react-hot',
                    'babel'
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '',
            '.js'
        ]
    }
};
