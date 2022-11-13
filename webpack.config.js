const webpack = require('webpack')
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: '[name][contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: '[name][ext]',
      clean: true
  },
    
    performance: {
      hints: false,
      maxAssetSize: 512000,
      maxEntrypointSize: 512000
    },
  
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
  },
    
    module: {
    rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg|jpeg|svg|gif)$/i,
          type: 'asset/resource'
        }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'My Web Page',
      filename: 'index.html',
      template: 'src/index.html'
    })
    ]
    
};
