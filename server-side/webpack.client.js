const path = require('path')

module.exports = {
  // webpack the root file of our app, entry file
  // of our server app
  entry: './src/client/client.js',

  // tell webpack where to put the output file
  // that is generated
  // path is to build directory
  // use path module helper from node.js runtime
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  // tell webpack to run babel on every file it runs through, only on js files, when one if found run babel loader, then exclude files in certain directories
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
}
