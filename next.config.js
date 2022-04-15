module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.glsl$/,
        use: ['raw-loader'],
      }
    );
    return config;
  },
};
