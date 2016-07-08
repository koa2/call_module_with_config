# call_module_with_config


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
