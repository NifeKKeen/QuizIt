const HTMLWebpackPlugins = require("html-webpack-plugin");
exports.buildPlugins = function ({ htmlPath }) {
  return [
    new HTMLWebpackPlugins({
      template: htmlPath,
    }),
  ];
};