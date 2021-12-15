/* eslint-disable */
module.exports = cfg => {
  const variables = require('./style.token.json');
  const dev = cfg.env === 'development';
  const scss = cfg.file.extname === '.scss';

  return {
    map: dev ? { inline: false } : false,
    parser: scss ? 'postcss-scss' : false,
    plugins: [
      require('postcss-advanced-variables')({ variables }),
      require('postcss-map-get')(),
      require('postcss-nested')(),
      require('postcss-sort-media-queries')(),
      require('postcss-assets')({
        loadPaths: ['src/assets/img/']
      }),
      require('autoprefixer')(),
      dev ? null : require('cssnano')({ preset: 'default' })
    ],
  };
};
