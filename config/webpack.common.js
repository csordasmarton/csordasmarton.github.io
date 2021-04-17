const CopyPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const { DefinePlugin } = require('webpack');

const { join } = require('path');

const helpers = require('./helpers');

function sassLoaderOptions(indentedSyntax=false) {
  return {
    implementation: require('sass'),
    sassOptions: { indentedSyntax },
  }
}

module.exports = {
  entry: helpers.root('src', 'main.js'),
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
     splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': helpers.root('src'),
      '@images': helpers.root('public', 'assets', 'images'),
      'Vuetify': join('vuetify', 'lib', 'components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules\/(?!vuetify)/],
        options: {
          presets: [
            ["@babel/preset-env", {
              useBuiltIns: "usage",
              corejs: 3,
            }]
          ]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/],
        enforce: 'pre',
        options: {
          emitWarning: true,
          configFile: './.eslintrc.js'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: sassLoaderOptions(true)
          }
        ]
      },
      {
        test:/\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: sassLoaderOptions(false)
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name() {
                if (process.env.NODE_ENV === 'development') {
                  return '[path][name].[ext]';
                }

                return '[contenthash].[ext]';
              },
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        'ASSET_PATH': JSON.stringify(join('public', 'assets'))
      }
    }),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      title: 'Csordás Márton',
      favicon: helpers.root('public', 'favicon.ico'),
      template: helpers.root('public', 'index.html')
    }),
    new CopyPlugin({
      patterns: [
        {
          from: helpers.root('public', 'assets'),
          to: helpers.root('dist', 'public', 'assets')
        }
      ]
    }),
  ]
}
