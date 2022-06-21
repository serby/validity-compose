# validity-compose

Compose a number of validators together and call as a single validator. This is
useful when used with a conditional validator.

This used to be called `validity-validation-group`

## Installation

```
npm install --save @clocklimited/validity-compose
```

## Usage

Below is a simple example for usage with schemata and save:

``` js
var validity = require('@clocklimited/validity')
  , schemata = require('schemata')
  , compose = require('@clocklimited/validity-compose')

var schema = schemata(
    { type:
      { type: String
      }
    , url:
      { type: String
      , validators: { all: [ validateIfPropertyIn('type', ['a', 'b'], compose([ validity.required, validity.url ]) ] }
      }
    })
```
