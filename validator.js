var async = require('async')

module.exports = function compose (validators) {
  if (!Array.isArray(validators)) {
    throw new TypeError('Array expected')
  }

  return function (key, msg, object, cb) {
    async.eachSeries(validators, function (validator, callback) {
      validator(key, msg, object, function (err, result) {
        if (err) return cb(err)
        if (result) return cb(null, result)
        callback(null, undefined)
      })
    }, cb)
  }
}
