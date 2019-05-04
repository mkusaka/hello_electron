const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "main.ts"),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          }
        ],
        exclude: /\.\/(node_modules)/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname)
  },
  node: {
    fs: "empty"
  }
};
