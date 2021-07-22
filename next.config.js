const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["flagpack-core"]);
const path = require("path");

module.exports = withTM(
  withImages({
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        include: [path.resolve(__dirname, "/node_modules/flagpack-core")],
        issuer: { and: [/\.(js|ts|md)x?$/] },
        use: [
          {
            loader: "@svgr/webpack",
          },
        ],
      });
      return config;
    },
  })
);
