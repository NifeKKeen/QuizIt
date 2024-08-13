exports.buildResolvers = function (options) {
  return {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": options.paths.src,
    },
  };
};