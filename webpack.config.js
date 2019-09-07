const path = require('path');
const postcssNormalize = require('postcss-normalize');

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.(css|scss)$/,
    use: [
      'style-loader',
      { 
        loader: 'css-loader', 
        options: { importLoaders: 1 } 
      },
      { 
        loader: 'postcss-loader', 
        options: {
          ident: 'postcss',
          plugins: () => [
            postcssNormalize()
          ]
        } 
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: false,
        },
      },
    ]
  }
]

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
    ],
  },
  devServer: {
    contentBase: './public',
  },
}