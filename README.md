# validity-validation-group

Chain a number of validators together and call as a single validator. This is
useful when used with a conditional validator.

## Installation

```
npm install --save validity-validation-group
```

## Usage

Below is a simple example for usage with schemata and save:

``` js
var validity = require('validity')
  , schemata = require('schemata')
  , validationGroup = require('validity-validation-group')

var schema = schemata(
    { type:
      { type: String
      }
    , url:
      { type: String
      , validators: { all: [ validateIfPropertyIn('type', ['a', 'b'], validationGroup([ validity.required, validity.url ]) ] }
      }
    })
```
