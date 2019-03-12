const {
  override,
  fixBabelImports,
  addWebpackAlias,
  overrideDevServer,
  // addLessLoader,
} = require('customize-cra');
const alias = require('./alias');
const path = require('path');
const apiMocker = require('webpack-api-mocker')
module.exports = {
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      let before = function (app) { 
        apiMocker(app, path.resolve(__dirname,'./mock/api.js'), {
          changeHost: true,
        })
     }
     return {
       ...config,
       before
     }
    }
  },
}
