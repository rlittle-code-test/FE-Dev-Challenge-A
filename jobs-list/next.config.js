const path = require('path');

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (baseConfig) => {
    const { module = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };

    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, '../components')],
    });
    newConfig.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    newConfig.resolve.extensions.push('.ts', '.tsx');
    return newConfig;
  },
};
