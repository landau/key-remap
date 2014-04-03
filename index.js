'use strict';

var has = Object.prototype.hasOwnProperty;

function get(obj, _key) {
  return obj[_key];
}

/**
 * Remaps a values from an object to specified keys
 *
 * @param {object} keymap
 * @param {object} obj
 *
 * @return {object}
 */
module.exports = function keyRemap(keymap, obj) {
  return Object.keys(keymap).reduce(function(acc, key) {
    var _key = get(keymap, key);
    if (has.call(obj, _key)) acc[key] = obj[_key];
    return acc;
  }, {});
};
