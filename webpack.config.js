var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    devServer;

devServer = {
    contentBase: __dirname + '/endpoint',
    colors: true,
    quiet: false,
    noInfo: false,
    publicPath: '/',
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8000,
    hot: true
};

module.exports = {
    devtool: 'source-map',
    debug: false,
    devServer: devServer,
    context: __dirname + '/src',
    entry: {
        app: [
            './'
        ]
    },
    output: {
        path: __dirname + '/endpoint',
        filename: '[name].js',
        publicPath: devServer.publicPath
    },
    plugins: [
        new ExtractTextPlugin('app.css', {
            allChunks: true
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.OldWatchingPlugin(),
        // new webpack.NewWatchingPlugin(),
        // https://github.com/webpack/docs/wiki/optimization#deduplication
        // new webpack.optimize.DedupePlugin(),
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
                loader: 'babel'
            }
        ]
    },
    resolve: {
        // root: path.resolve(__dirname, 'node_modules'),
        extensions: [
            '',
            '.js'
        ]
    }
};
