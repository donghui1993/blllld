const path = require('path')
const config = {
  entry: {
    blllld:path.resolve(__dirname, './lib/blllld.ts')
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
};
module.exports = config;