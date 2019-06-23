# validity-compose

[![Greenkeeper badge](https://badges.greenkeeper.io/serby/validity-compose.svg)](https://greenkeeper.io/)

Compose a number of validators together and call as a single validator. This is
useful when used with a conditional validator.

This used to be called `validity-validation-group`

## Installation

```
npm install --save validity-compose
```

## Usage

Below is a simple example for usage with schemata and save:

``` js
var validity = require('validity')
  , schemata = require('schemata')
  , compose = require('validity-compose')

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
