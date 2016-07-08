# call_module_with_config

[![NPM version](https://img.shields.io/npm/v/call_module_with_config.svg?style=flat-square)](https://www.npmjs.com/package/call_module_with_config)

## Install

```
$ npm install --save call_module_with_config
```

## Usages

```
var conf = {
  'koa-favicon': {
    'path': 'sss',
    'options': {
      'maxAge': 1
    }
  },
  'koa-etag':{
    
  }
}


var call = require('.')

// call('./favicon', conf, true)

console.dir(call(['koa-favicon', 'koa-etag'], conf).toString())
```
