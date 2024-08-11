const { buildPlugins } = require("./buildPlugins");
const { buildLoaders } = require("./buildLoaders");
const { buildResolvers } = require("./buildResolvers");
const { buildDevServer } = require("./buildDevServer");

exports.buildWebpackConfig = function (options) {
  const { mode, paths } = options;
  const IS_DEV = mode === "development";
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "app.js",
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },
    plugins: buildPlugins({
      htmlPath: paths.htmlPath,
    }),
    resolve: buildResolvers(),
    devServer: IS_DEV ? buildDevServer(options) : undefined,
    devtool: IS_DEV ? "eval" : undefined,
  };
};