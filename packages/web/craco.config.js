const CracoEsbuildPlugin = require('craco-esbuild')
const webpack = require('webpack')

module.exports = {
  webpack: {
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react'
      })
    ]
  },
  eslint: {
    enable: false
  },
  plugins: [{ plugin: CracoEsbuildPlugin }]
}
