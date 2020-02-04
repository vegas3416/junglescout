/* eslint-disable node/no-unpublished-require */
'use strict';

const webpack = require('webpack');
const path = require('path'); // Resolves absolute path names
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Generates HTML from template

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/index.tsx'], // First file to load - starts webpack chain
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Identify dist folder via absolute path
    publicPath: '',
    filename: '[name].js' // File naming with hash for cache busting
  },
  devtool: 'source-map',
  devServer: {
    https: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        loader: 'ts-loader'
      },
      {
        test: /\.s?css$/, // CSS and SCSS files
        use: [
          {
            loader: 'style-loader' // Injects CSS as <style> tags
          },
          {
            loader: 'css-loader' // Resolves S/CSS imports
          },
          {
            loader: 'sass-loader' // Processes SCSS into CSS
          }
        ]
      },
      {
        // Load other common files
        // Will embed as a data-url under the size limit
        // Falls back to file-loader otherwise
        test: /\.(png|jpg|jpeg|svg|gif|eot|ttf|woff)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // import without .js, .tsx, .ts extensions
    alias: {
      // Create any alias here
      // Example:
      // components: path.resolve(__dirname, 'src', 'components'),
    }
  },
  plugins: [
    /**
     * Generates the HTML file that encludes the webpack bundles in the body
     * and the location where it lives:
     * https://github.com/jantimon/html-webpack-plugin
     */
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.template.html',
      filename: 'index.html',
      title: 'Picasso Typescript Boilerplate',
      favicon: 'src/favicon.ico',
      excludeChunks: ['_images']
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
};
