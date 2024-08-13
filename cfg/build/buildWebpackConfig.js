const { buildPlugins } = require("./buildPlugins");
const { buildLoaders } = require("./buildLoaders");
const { buildResolvers } = require("./buildResolvers");
const { buildDevServer } = require("./buildDevServer");

exports.buildWebpackConfig = function (options) {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "app.js",
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? "eval" : undefined,
  };
};