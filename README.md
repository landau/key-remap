[![Build Status](https://travis-ci.org/landau/key-remap.svg)](https://travis-ci.org/landau/key-remap)

key-remap
=========

Remaps a values from an object to specified keys

```js
/**
 * Remaps a values from an object to specified keys
 *
 * @param {object} keymap
 * @param {object} obj
 *
 * @return {object}
 */
function keyRemap(keymap, obj) { ... }
```

## Install

`npm i -S key-remap`

## Usage

```js
var assert = require('assert');
var keyRemap = require('key-remap');
var is = require('is-predicate');

var keymap = {
  nameKey: 'name',
  ageKey: 'age',
  missingKey: 'missing'
};

var obj = {
  name: 'Trevor',
  age: 28
};

remapped = keyRemap(keymap, obj);

assert(is.object(remapped)); // true
assert.equal(remapped.nameKey, obj.name); // true
assert(is.not.exists(remapped.missingKey)); // true
```
