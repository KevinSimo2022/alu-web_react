const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is: ${mode}`);

  return {
    mode, // Dynamically set the mode
    entry: './src/index.js',
    output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].[contenthash].js', // Use contenthash for unique filenames
},
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'), // Consistent relative path
      },
      port: 8564,
      hot: true,
      open: true,
      compress: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            "file-loader",
            {
              loader: "image-webpack-loader",
              options: {
                disable: mode === "development", // Optimize images only in production
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin(),
    ],
    optimization: {
  minimize: mode === "production",
  splitChunks: {
    chunks: 'all', // Split all chunks
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor', // Customize the vendor chunk name
        chunks: 'all',
      },
    },
  },
},
  };
};
