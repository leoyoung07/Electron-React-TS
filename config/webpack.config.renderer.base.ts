import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const rendererBaseConfig: webpack.Configuration = {
  target: 'electron-renderer',
  entry: path.resolve(__dirname, '..', 'src/renderer/index.ts'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'renderer.js'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'index.html'),
      inject: true
    })
  ],
  resolve: {
    extensions: ['.css', '.scss', '.tsx', '.jsx', '.ts', '.js', '.json', '*']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)(\?\S*)?$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {}
      }
    ]
  }
};

export default rendererBaseConfig;
