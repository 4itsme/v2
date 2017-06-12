var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',

    "jquery": 'lib/jquery.min', //"https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
                  //'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min',
    "underscore": 'lib/lodash.min', //"lib/underscore",
                  //"https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min"
    "bootstrapjs": "../libcss/bootstrap-3.3.7-dist/js/bootstrap.min", 
                  //"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
    "vue": 'lib/vue.min', //location.origin !== "http://localhost:8080" ? 'lib/vue.min' : 'lib/vue',
                  //"https://unpkg.com/vue/dist/vue"
    "vue-router": 'lib/vue-router',     
                  //"https://unpkg.com/vue-router/dist/vue-router.js" or specific version one:
                  //"https://unpkg.com/vue-router@2.0.0/dist/vue-router.js."
    "moment": 'lib/moment.min',

    "jqueryMark": 'lib/jquery.mark.min',
                  //"http://www.jsdelivr.com/projects/mark"
                  //"https://cdnjs.com/libraries/mark"
    "vue-awesome": 'lib/vue-awesome', //see: https://github.com/Justineo/vue-awesome

    //module code file paths              
    "qMain": 'modules/qMain',
    "Q": 'modules/Q', 
  "qUtil": 'modules/qUtil',
  "qSearch": 'modules/qSearch.1.0',

    "qAsbab": 'modules/qAsbab', 
  "qSynonyms": 'modules/qSynonyms',
    "qCorpus": 'modules/qCorpus.0.4',
    "qRootLemDict": 'modules/qRootLemDict',
    "qRootMeanings": 'modules/qRootMeanings',

    "qRoot": 'modules/qRoot',
  "qSarf": 'modules/qSarf',
  "qSarfGenerator": 'modules/qSarfGenerator',
  "qAntonyms": 'modules/qAntonyms',


  //data files paths
  "qBuck": 'data/qBuckFull',
  "qTrans": 'data/TANZIL.en.sahih',
  "qTranslit": 'data/TANZIL.en.transliteration',

  "asbabDATA": 'data/asbabDATA',
  "synonymsDATA": 'data/synonymsDATA',
  //"qCorpus1": 'data/manzil1,7',
  //"qCorpus2": 'data/manzil2,3,4',
  //"qCorpus3": 'data/manzil5,6',

  "w2wEn": 'data/w2wEn',
  "w2wCorpus": 'data/w2wCorpus',
  "w2wCorpusV2": 'data/w2wCorpus.v2',

  "content-A": ['data/content/A', 'https://4itsme.github.io/v1/data/content/A'],
  "content-AA": ['data/content/AA', 'https://4itsme.github.io/v1/data/content/AA'],
  "content-appendix": ['data/content/appendix', 'https://4itsme.github.io/v1/data/content/appendix'],
  "content-b": ['data/content/b', 'https://4itsme.github.io/v1/data/content/b'],

  "content-ch": ['data/content/ch', 'https://4itsme.github.io/v1/data/content/ch'],
  "content-d": ['data/content/d', 'https://4itsme.github.io/v1/data/content/d'],
  "content-DA": ['data/content/DA', 'https://4itsme.github.io/v1/data/content/DA'],
  "content-dd": ['data/content/dd', 'https://4itsme.github.io/v1/data/content/dd'],
  
  "content-dh": ['data/content/dh', 'https://4itsme.github.io/v1/data/content/dh'],
  "content-E": ['data/content/E', 'https://4itsme.github.io/v1/data/content/E'],
  "content-f": ['data/content/f', 'https://4itsme.github.io/v1/data/content/f'],
  "content-gg": ['data/content/gg', 'https://4itsme.github.io/v1/data/content/gg'],
  
  "content-gh": ['data/content/gh', 'https://4itsme.github.io/v1/data/content/gh'],
  "content-h": ['data/content/h', 'https://4itsme.github.io/v1/data/content/h'],
  "content-HA": ['data/content/HA', 'https://4itsme.github.io/v1/data/content/HA'],
  "content-j": ['data/content/j', 'https://4itsme.github.io/v1/data/content/j'],
  
  "content-k": ['data/content/k', 'https://4itsme.github.io/v1/data/content/k'],
  "content-kh": ['data/content/kh', 'https://4itsme.github.io/v1/data/content/kh'],
  "content-l": ['data/content/l', 'https://4itsme.github.io/v1/data/content/l'],
  "content-m": ['data/content/m', 'https://4itsme.github.io/v1/data/content/m'],
  
  "content-n": ['data/content/n', 'https://4itsme.github.io/v1/data/content/n'],
  "content-p": ['data/content/p', 'https://4itsme.github.io/v1/data/content/p'],
  "content-q": ['data/content/q', 'https://4itsme.github.io/v1/data/content/q'],
  "content-r": ['data/content/r', 'https://4itsme.github.io/v1/data/content/r'],
  
  "content-s": ['data/content/s', 'https://4itsme.github.io/v1/data/content/s'],
  "content-SA": ['data/content/SA', 'https://4itsme.github.io/v1/data/content/SA'],
  "content-sh": ['data/content/sh', 'https://4itsme.github.io/v1/data/content/sh'],
  "content-t": ['data/content/t', 'https://4itsme.github.io/v1/data/content/t'],
  
  "content-TA": ['data/content/TA', 'https://4itsme.github.io/v1/data/content/TA'],
  "content-th": ['data/content/th', 'https://4itsme.github.io/v1/data/content/th'],
  "content-tt": ['data/content/tt', 'https://4itsme.github.io/v1/data/content/tt'],
  "content-w":  ['data/content/w', 'https://4itsme.github.io/v1/data/content/w'],
  
  "content-y": ['data/content/y', 'https://4itsme.github.io/v1/data/content/y'],
  "content-z": ['data/content/z', 'https://4itsme.github.io/v1/data/content/z'],
  "content-ZA": ['data/content/ZA', 'https://4itsme.github.io/v1/data/content/ZA'],


    },
//    modulesDirectories: ['./src/modules'].

  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
