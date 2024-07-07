const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './client/src/js/index.js',
    install: './client/src/js/install.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      title: 'JATE',
      inject: 'body'
    }),
    new InjectManifest({
      swSrc: './client/src-sw.js',
      swDest: 'service-worker.js',
      exclude: [/\.map$/, /manifest\.json$/],
    }),
    new WebpackPwaManifest({
      name: 'Just Another Text Editor',
      short_name: 'JATE',
      description: 'A simple text editor',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      start_url: '/',
      publicPath: '/',
      icons: [
        {
          src: path.resolve('./client/src/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
        }
      ],
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
