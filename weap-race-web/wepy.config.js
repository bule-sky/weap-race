const path = require('path');
var prod = process.env.NODE_ENV === 'production'
const ApiUrl = process.env.NODE_ENV === 'production' ? 'http://shadowmon.com/' : 'http://127.0.0.1:9080/'

module.exports = {
  wpyExt: '.wpy',
  eslint: false,
  cliLogs: !prod,
  build: {
    web: {
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js')
    }
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },  
  compilers: {
    pug:{},
    less: {
      compress: prod
    },
    stylus: {
      compress: prod
    },
    /*sass: {
      outputStyle: 'compressed'
    },*/
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
        // 'transform-class-properties',
        // 'transform-decorators-legacy',
        // 'transform-object-rest-spread',
        // 'babel-plugin-transform-class-properties',
        // 'transform-export-extensions',
        // 'syntax-export-extensions'
      ]
    }
  },
  plugins: {
  },
  appConfig: {
    baseUrl: ApiUrl,
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {

  // module.exports.cliLogs = false;

  // delete module.exports.compilers.babel.sourcesMap;
  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩less
  module.exports.compilers['less'] = {
    compress: true
  }

  // 压缩js
  module.exports.plugins = {
    'replace': {
      filter: /\.js$/g,
      config: {
          find: /__BASE_URL__/g,
          replace: ApiUrl
      }
    },
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}
