import webpack from 'webpack';
import merge from 'webpack-merge';
import mainBaseConfig from './webpack.config.main.base';

const mainConfig = merge(
  mainBaseConfig,
  {
    mode: 'production',
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
      }),
    ],
  }
);

export default mainConfig;
