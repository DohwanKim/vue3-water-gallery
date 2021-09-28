// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['postcss-loader'],
        },
      ],
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
      },
    },
  },
};
