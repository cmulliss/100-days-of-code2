const path = require('path')
// webpack merge used to merge base config
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
// to prevent libraries being added to bundle
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // call it by adding ()
  // will tell webpack to not bundle any libs into our output bundle on the server, if that lib exists inside the node modules folder
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)

// tell webpack to not bundle any libraries into our output bundle on the server, if that library exists inside the node modules folder
