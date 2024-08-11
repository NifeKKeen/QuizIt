exports.buildLoaders = function () {
  const babelLoader = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  };
  const cssLoader = {
    test: /\.css$/,
    use: ["css-loader", "style-loader"],
  };
  const sassLoader = {
    test: /\.s[ac]ss$/,
    use: ["sass-loader"],
  };


  return [
    babelLoader,
    cssLoader,
    sassLoader,
  ];
};