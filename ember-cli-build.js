'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function isProduction() {
  return EmberApp.env() === 'production';
}

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticInvokables: true,
    staticEmberSource: true,
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
    splitAtRoutes: ['application', 'second'],
    packagerOptions: {
      webpackConfig: {
        module: {
          strictExportPresence: true,
          rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                isProduction() ? MiniCssExtractPlugin.loader : 'style-loader',
                { loader: 'css-loader', options: { url: false } },
                {
                  loader: 'sass-loader',
                  options: {
                    webpackImporter: false,
                  },
                },
              ],
            },
          ],
        },
      },
    },
    // end packagerOptions
  });
};
