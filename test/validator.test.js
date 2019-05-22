var createValidator = require('..')
  , required = require('validity-required')
  , integer = require('validity-integer')
  , assert = require('assert')

describe('validity-validator-group', function () {
  it('should throw array is not passed', function () {
    assert.throws(function () {
      createValidator()
    }, { name: 'TypeError'
      , message: 'Array expected'
      })
  })

  it('should validate with empty array', function (done) {
    var obj =
      { property: 'value'
      , secondProperty: ''
      }

    createValidator([])('secondProperty'
      , 'Second Property'
      , obj
      , function (err, message) {
        assert.equal(err, null)
        assert.equal(undefined, message)
        done()
      }
    )
  })

  it('should validate with one validator', function (done) {
    var obj =
      { property: 'value'
      }
    createValidator([ required ])('secondProperty'
      , 'Second Property'
      , obj
      , function (err, message) {
        assert.equal(err, null)
        assert.equal('Second Property is required', message)
        done()
      }
    )
  })

  it('should validate with two validators', function (done) {
    var obj =
      { property: 'value'
      , secondProperty: 'Hello'
      }
    createValidator([ required, integer ])('secondProperty'
      , 'Second Property'
      , obj
      , function (err, message) {
        assert.equal(err, null)
        assert.equal('Second Property must be an integer', message)
        done()
      }
    )
  })

  it('should pass validation', function (done) {
    var obj =
      { property: 'value'
      , secondProperty: 1
      }
    createValidator([ required, integer ])('secondProperty'
      , 'Second Property'
      , obj
      , function (err, message) {
        assert.equal(err, null)
        assert.equal(undefined, message)
        done()
      }
    )
  })
})
