import webpack from 'webpack';
import merge from 'webpack-merge';
import rendererBaseConfig from './webpack.config.renderer.base';

const rendererConfig = merge(
  rendererBaseConfig,
  {
    mode: 'production',
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
      }),
    ],
  }
);

export default rendererConfig;
