# unix-timestamp-webpack-plugin

[![npm version](https://badge.fury.io/js/unix-timestamp-webpack-plugin.svg)](https://badge.fury.io/js/unix-timestamp-webpack-plugin)

Emits a file that contains a unix timestamp of your latest webpack build

## Install

```bash
npm install --save-dev unix-timestamp-webpack-plugin 
```

## Configuration

```js
// Inside your webpack configuration
var UnixTimestampPlugin = require('unix-timestamp-webpack-plugin');

module.exports = {
  plugins: [new UnixTimestampPlugin()]
};  
```

## Options

Timestamp Webpack Plugin accepts two options, path and filename

```js
new UnixTimestampPlugin({
    filePath: path.join(__dirname, 'app'),
    fileName: '.build-timestamp'
})
```

| Option    |   Default             |
|-----------|-----------------------|
| filePath  | `./`                  |
| fileName  | `.build-timestamp`    |