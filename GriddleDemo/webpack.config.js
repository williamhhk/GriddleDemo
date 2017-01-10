var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./Main.jsx",
    output: {
        filename: "browser-bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",

                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
        ],
    },
    plugins: [
      new ExtractTextPlugin("styles.css")
    ]
};