import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const mainBaseConfig: webpack.Configuration = {
  target: 'electron-main',
  entry: path.resolve(__dirname, '..', 'src/main/index.ts'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'main.js'
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};

export default mainBaseConfig;
