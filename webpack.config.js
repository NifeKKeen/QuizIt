const path = require("node:path");
const { buildWebpackConfig } = require("./cfg/build/buildWebpackConfig");
const NODE_ENV = process.env.NODE_ENV;

exports.default = buildWebpackConfig({
  paths: {
    entry: path.resolve(__dirname, "./src/app/index.jsx"),
    output: path.resolve(__dirname, "./dist"),
    htmlPath: path.resolve(__dirname, "./public/index.html"),
    src: path.resolve(__dirname, "src"),
  },
  mode: NODE_ENV,
  port: process.env.PORT || 8000,
  isDev: NODE_ENV === "development",
});