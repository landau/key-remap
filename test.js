'use strict';

var assert = require('assert');
var keyRemap = require('./');
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

describe('key-remap', function() {
  before(function() {
    this.remapped = keyRemap(keymap, obj);
  });

  it('should return an object', function() {
    assert(is.object(this.remapped));
  });

  it('should map keys from obj->keymap', function() {
    assert.equal(this.remapped.nameKey, obj.name);
  });

  it('should ignore missing keys', function() {
    assert(is.not.exists(this.remapped.missingKey));
  });
});
