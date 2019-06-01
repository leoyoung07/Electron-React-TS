import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import rendererBaseConfig from './webpack.config.renderer.base';

const rendererDevConfig = merge(
  rendererBaseConfig,
  {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
        WEBPACK_DEV_SERVER_PORT: '9000'
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },
  }
);

export default rendererDevConfig;
