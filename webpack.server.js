const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  // Inform webpack for bundle for node.js rather than browser
  target: "node",
  // Root file
  entry: "./src/index.js",
  // Tell webpack where to put output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  }
};

module.exports = merge(baseConfig, config);
