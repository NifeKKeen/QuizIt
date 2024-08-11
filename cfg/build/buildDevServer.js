exports.buildDevServer = function (options) {
  const { paths, port } = options;
  return {
    static: {
      directory: paths.output,
    },
    port: port || 8000,
    hot: true,
    open: true,
    historyApiFallback: true,
  };
};