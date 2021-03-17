const webpack = require("webpack");
const path = require("path");

const config = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": "{}",
        }),
    ],
};

module.exports = config;
