import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import autoprefixer from "autoprefixer";
import cssnext from "postcss-cssnext";
import postcssreporter from "postcss-reporter";
// import postcssreporter from "postcss-reporter";

import path from 'path';

    // autoprefixer,
const postcssPlugins = () => [
    cssnext(),
    postcssreporter()
]

export default {
  context: path.resolve(__dirname, '.'),
  devtool: 'eval-source-map',  // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, '/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  stats: {
    assets: true,
    errors: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),

    // Create HTML file that includes reference to bundled JS
    // new HtmlWebpackPlugin({
    //   template: "src/index.html",
    //   inject: true
    // }),
    new HtmlWebpackPlugin({  // Also generate a todo
      filename: 'index.html',
      // template: "src/index.html",
      template: 'src/views/todo.ejs',
      inject: true
    }),

    // new HtmlWebpackPlugin({  // Also generate a todo
    //   filename: 'test.html',
    //   // template: "src/index.html",
    //   template: 'src/views/todo.ejs',
    //   inject: true
    // }),

    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
  ],
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
      {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
      {test: /(\.css|\.scss|\.sass)$/, loaders: [
        { loader:'style-loader'},
        { loader: 'css-loader?sourceMap', options: { sourceMap: true, modules: true, importLoaders: 1 }},
        { loader:'postcss-loader', options: {  sourceMap: true, plugins: () => postcssPlugins()}},
        { loader:'sass-loader', options: { sourceMap: true, includePaths: [path.resolve(__dirname, 'src', 'styles/scss')] } }
      ]}
    ]
  },
  resolve: {
    extensions: ['*', '.js', 'jsx', '.json']
  }
}
