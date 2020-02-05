const { NODE_ENV } = process.env;
const webpack = require('webpack');
const path = require('path'); // Resolves absolute path names
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Generates HTML from template

const excludeNodeModules = absPath => {
  const isIndeedFrontEndModule =
    absPath.match('frontend-') && absPath.match('@indeed');
  const isNodeModule = absPath.match('node_modules');
  return isNodeModule && !isIndeedFrontEndModule;
};

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/index.tsx'], // First file to load - starts webpack chain
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Identify dist folder via absolute path
    publicPath: '',
    filename: '[name]-[hash].js', // File naming with hash for cache busting
    chunkFilename: '[name]-[hash]-chunk.js' // Chunked files
  },
  devtool: 'source-map',
  devServer: {
    https: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        
        test: /(\.jsx?|\.tsx?)$/,
        exclude: /node_modules(?!(\/@indeed\/mirrorball-flora\/|\/@indeed\/cortex-frontend|\/@indeed\/frontend-components-react\/|\/query-string\/|\/split-on-first\/|\/strict-uri-encode\/))|modernizr|foundation/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-optional-chaining']
          }
        }
      },
      {
        test: /\.s?css$/, // CSS and SCSS files
        use: [
          {
            loader: 'style-loader' // Injects CSS as <style> tags
          },
          {
            loader: 'css-loader', // Resolves S/CSS imports
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', // Processes SCSS into CSS
            options: {
              sourceMap: true
            }
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
      // Alias paths so that e.g. "../../components/File" becomes "Components/File"
      Components: path.resolve(__dirname, 'src/components'),
      Styles: path.resolve(__dirname, 'src/styles'),
      Src: path.resolve(__dirname, 'src'),
      Images: path.resolve(__dirname, 'src/images'),
      // Indeed ICL and style aliases
      Indeed: path.resolve(
        __dirname,
        'node_modules/@indeed/frontend-components-react/components'
      ),
      Janus: path.resolve(
        __dirname,
        'node_modules/@indeed/frontend-style-janus/src'
      )
    }
  },
  plugins: [
    /**
     * Generates the HTML file that encludes the webpack bundles in the body
     * and the location where it lives:
     * https://github.com/jantimon/html-webpack-plugin
     */
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.template.html',
      title: 'Picasso Typescript Boilerplate',
      favicon: 'src/favicon.ico'
    })
  ]
};
