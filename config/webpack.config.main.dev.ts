import webpack from 'webpack';
import merge from 'webpack-merge';
import mainBaseConfig from './webpack.config.main.base';

const mainDevConfig = merge(
  mainBaseConfig,
  {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
        WEBPACK_DEV_SERVER_PORT: '9000'
      }),
    ],
  }
);

export default mainDevConfig;
