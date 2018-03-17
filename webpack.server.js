const path = require("path");

module.exports = {
  // Inform webpack for bundle for node.js rather than browser
  target: "node",
  // Root file
  entry: "./src/index.js",
  // Tell webpack where to put output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  // Run babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", (targets: { browsers: ["last 2 versions"] })]
          ]
        }
      }
    ]
  }
};