const webpack = require('webpack')
const path = require('path')
const DIST_DIR = 'dist'

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  entry: {
    app: resolve('src/index.js')
  },
  output: {
    path: resolve(DIST_DIR),
    filename: '[name][chunkhash].js'
  }
}