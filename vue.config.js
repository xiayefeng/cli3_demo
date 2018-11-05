const path = require('path')

let baseUrl = '/test/'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? baseUrl : '/',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',

  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))

    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('util', resolve('src/util'))
      .set('plugin', resolve('src/plugin'))

    const entry = config.entry('app')
    entry
      .add('@babel/polyfill')
      .end()
  },

  devServer: {
    port: 8081,
    proxy: {
      '/api': {
        target: 'url',
        changeOrigin: true
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/style/_variables.scss'),
        path.resolve(__dirname, './src/style/mixin.scss')
      ]
    })
}
