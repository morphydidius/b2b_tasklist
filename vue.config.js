const path = require('path');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  transpileDependencies: ['vuex-persist'],
  outputDir: resolve('public/'),
  configureWebpack: {
    resolve: {
        alias: {
            fonts: resolve('src/assets/fonts')
        }
    }
  }
}