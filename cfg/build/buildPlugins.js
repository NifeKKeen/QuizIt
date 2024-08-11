const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.buildPlugins = function (options) {
  const { paths, isDev } = options;
  return [
    new HTMLWebpackPlugin({
      template: paths.htmlPath,
    }),
    !isDev && new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
    }),
  ].filter(Boolean);
};