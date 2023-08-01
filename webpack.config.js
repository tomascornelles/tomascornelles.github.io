const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = () => {

  return {
    mode: 'development',
    entry: () => {
      return glob.sync('./_includes/assets/scripts/*.ts').reduce((pre, cur) => {
        pre[cur.replace(/^.*[\\\/]/, '').split('.')[0]] = cur;
        return pre;
      }, {});
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(s[ac]ss)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.(png|jpg|webp|gif)$/,
          use: [
            {
              loader: 'file-loader',
            }
          ]
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      path: __dirname + '/_includes/layouts/assets',
      filename: '[name].js',
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new CopyPlugin({
      patterns: [
        { from: __dirname + "/_includes/assets/images", to: __dirname + "/dist/assets/images" },
      ],
    }),
    ]
  };
};
