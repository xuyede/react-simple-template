const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const devServerConfig = {
  dev: {
    https: false,
    host: "127.0.0.1",
    port: "3000",
  },
};

const config = {
  devServer: {
    contentBase: "./build/",
    port: devServerConfig.dev.port,
    overlay: true,
    quiet: true,
  },
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: {
    react: "window.React",
    "react-dom": "window.ReactDOM",
    redux: "window.Redux",
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: ${
            devServerConfig.dev.https ? "https" : "http"
          }://${devServerConfig.dev.host}:${devServerConfig.dev.port}`,
        ],
      },
      clearConsole: true,
    }),
  ],
};
module.exports = config;
