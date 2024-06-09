const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = (NODE_ENV === "development");

module.exports.default = {
  entry: path.resolve(__dirname, "../src/client/index.jsx"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "app.js",
    clean: true,
  },
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["css-loader", "style-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["sass-loader"]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/shared/index.html"),
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 8080,
    hot: true,
    open: true,
  },
  devtool: IS_DEV ? "eval" : false,
}