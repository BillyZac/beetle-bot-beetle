var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
       },
      {
        test: /\.js$/,
        exclude: '/node_modules/'
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: 'src/index.html',
        inject: 'true'
      })
  ],
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json']
  }
}
