module.exports = {
  entry: "./public/index.js",
  mode: "development",
  output: {
    filename: "./main.js",
    chunkFilename: "[name].bundle.js"
  },
  devServer: {
    compress: true,
    port: 3000,
    watchContentBase: true,
    progress: true
  }
 }
