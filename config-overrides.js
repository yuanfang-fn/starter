const {
  override,
  fixBabelImports,
  addWebpackAlias,
  overrideDevServer,
  // addLessLoader,
} = require('customize-cra');
const alias = require('./alias');
const apiMocker = require('webpack-api-mocker')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile', libraryDirectory: 'es', style: 'css', // change importing css to less
  }),
  addWebpackAlias(alias),
  overrideDevServer({
    before(app) {
      apiMocker(app, path.resolve('mock/api.js'))
    }
  })
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { "@primary-color": "#1DA57A" }
  // })
);
