const {
  override,
  fixBabelImports,
  addWebpackAlias,
  // addLessLoader,
} = require('customize-cra');
const alias = require('./alias');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile', libraryDirectory: 'es', style: 'css', // change importing css to less
  }),
  addWebpackAlias(alias),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { "@primary-color": "#1DA57A" }
  // })
);
