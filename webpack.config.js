const path = require("path");

module.exports = {
  mode: process.NODE_ENV || "development",
  entry: "./src",
  target: "node",
  output: {
    path: path.resolve(__dirname),
    filename: "index.js"
  },
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: []
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
