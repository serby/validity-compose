var createValidator = require('..')
  , validity = require('validity')
  , assert = require('assert')

describe('validity-validator-group', function () {

  it('should throw array is not passed', function () {
    assert.throws(function () {
      createValidator()
    }, 'Array expected')
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
          assert.equal(undefined, message)
          done()
        }
    )
  })

  it('should validate with one validator', function (done) {
    var obj =
      { property: 'value'
      }
    createValidator([ validity.required ])('secondProperty'
      , 'Second Property'
      , obj
      , function (err, message) {
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
    createValidator([ validity.required, validity.integer ])('secondProperty'
      , 'Second Property'
      , obj
      , function (err, message) {
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
    createValidator([ validity.required, validity.integer ])('secondProperty'
      , 'Second Property'
      , obj
      , function (err, message) {
          assert.equal(undefined, message)
          done()
        }
    )
  })

})
