const path = require('path');


module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  // entry: './src/data2.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
        // include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/,
        // include: path.resolve(__dirname, 'src')
      },
    ]
  }
}
