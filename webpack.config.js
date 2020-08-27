const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: [
      "./index.tsx",
      "./src/scss/style.scss",
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: './assets/fonts'
            }
        }]
      }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  output: {
    filename: "assets/bundle.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "index.html",
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: '[id].css',
    })
  ],
  devServer: {
    writeToDisk: true
  }
};
