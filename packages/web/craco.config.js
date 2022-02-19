const path = require('path')
require('dotenv').config({ path: path.resolve('..', '..', '.env') })

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
  plugins: [{ plugin: CracoEsbuildPlugin }],
  babel: {
    plugins: [
      [
        'babel-plugin-direct-import',
        {
          modules: ['@mui/system', '@mui/material', '@mui/lab', '@mui/icons-material', 'lodash', 'lodash-es']
        }
      ]
    ]
  }
}
