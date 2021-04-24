const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  reactOptions: {
    fastRefresh: true,
  },
  webpackFinal: async (baseConfig) => {
    const nextConfig = require("../next.config.js");
    const { module = {} } = baseConfig;

    const newConfig = {
      ...nextConfig.webpack,
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };

    // TypeScript
    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, "../components")],
    });
    newConfig.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    newConfig.resolve.extensions.push(".ts", ".tsx");
    return newConfig;
  },
};
