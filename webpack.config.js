const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    entry: path.join(__dirname,"frontend","index.tsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist"),
    },
    resolve: {
        extensions: [".js",".ts",".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: "css-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./frontend/index.html"
        })
    ]
}