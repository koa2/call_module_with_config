'use strict'

const debug = require('debug')('call_module_with_config')
const call_with_config = require('call_with_config')

module.exports = function call(arr, conf) {
  var result = []
  var callresult = []
  
  if (Array.isArray(arr)) {
    callresult = arr
  } else {
    callresult.push(arr)
  }
  
  debug(callresult)
  
  callresult.map(function(i){    
    result.push(call_with_config(i, conf))
  })

  return result
}
