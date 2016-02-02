var webpack,
    path,
    WriteFilePlugin,
    devServer;

webpack = require('webpack');
path = require('path');
ExtractTextPlugin = require('extract-text-webpack-plugin');

devServer = {
    contentBase: path.resolve(__dirname, './endpoint'),
    colors: true,
    quiet: false,
    noInfo: false,
    publicPath: '/static/',
    historyApiFallback: false,
    host: '127.0.0.1',
    lazy: true,
    port: 8000,
    hot: false
};

module.exports = {
    devtool: 'source-source-map',
    debug: true,
    devServer: devServer,
    context: path.resolve(__dirname, './src'),
    entry: {
        app: [
            'webpack-dev-server/client?http://' + devServer.host + ':' + devServer.port,
            './'
        ]
    },
    output: {
        path: path.resolve(__dirname, './endpoint/static'),
        filename: '[name].js',
        publicPath: devServer.publicPath
    },
    plugins: [
        new ExtractTextPlugin('app.css', {
            allChunks: true
        }),
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
