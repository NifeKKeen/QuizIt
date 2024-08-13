const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.buildLoaders = function (options) {
  const { isDev } = options;
  const babelLoader = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  };
  const sassLoader = {
    test: /\.s[ac]ss$/,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            auto: /\.module\./,
            localIdentName: isDev
              ? "[path][name]__[local]-[hash:base64:4]" :
              "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };
  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  }

  return [
    babelLoader,
    assetsLoader,
    sassLoader,
  ];
};