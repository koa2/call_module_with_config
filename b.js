var conf = {
  './favicon': {
    'path': 'sss',
    'options': {
      'maxAge': 1
    }
  } 
}

var call = require('.')

call('./favicon', conf)
