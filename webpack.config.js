const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    entry: path.join(__dirname,"frontend","client","index.tsx"),
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
                use: "ts-loader",
            },
            {
                test: /\.css$/,
                use: "css-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join("frontend","client","index.html")
        }),
    ],
    devServer: {
        historyApiFallback: true, // URL에 직접 path 입력할 경우, react-router-dom과 관련
        hot: true,
    }
}