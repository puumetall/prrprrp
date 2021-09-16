
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      { test: /\.s[ca]ss$/, use: ['style-loader','css-loader','sass-loader'] },
      { test: /\.twig$/, use: ['twig-loader']},
      { test: /\.ts$/, use: ['ts-loader']}
      // {
      //   module: {
      //     rules: [
      //       {
      //         test: /\.m?js$/,
      //         exclude: /node_modules/,
      //         use: {
      //           loader: "babel-loader",
      //           options: {
      //             presets: ['@babel/preset-env']
      //           }
      //         }
      //       }
      //     ]
      //   }
      // }
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
         template: './src/views/pages/index.twig', 
         filename:"index.html" ,
         posts: [
           {title: "Some title", content: "some cool content over here!"},
           {title: "Some title", content: "some cool content over here!"},
           {title: "Some title", content: "some cool content over here!"},
           {title: "Some title", content: "some cool content over here!"},
           {title: "Some title", content: "some cool content over here!"}
         ]
        }),
      new HtmlWebpackPlugin({ template: './src/views/pages/about.twig', filename:"about.html" }),
      new HtmlWebpackPlugin({ template: './src/views/pages/contact.twig', filename:"contact.html" })
    ],
};