'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compare = exports.hash = exports.genSalt = exports.getSalt = exports.getRounds = exports.compareSync = exports.hashSync = exports.genSaltSync = undefined;

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Synchronously
 */

var genSaltSync = exports.genSaltSync = function genSaltSync() {
  var rounds = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];
  var seed_length = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  return _bcryptjs2.default.genSaltSync(rounds, seed_length);
};

var hashSync = exports.hashSync = function hashSync() {
  var s = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var salt = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

  return _bcryptjs2.default.hashSync(s, salt);
};

var compareSync = exports.compareSync = function compareSync() {
  var s = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var hash = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  return _bcryptjs2.default.compareSync(s, hash);
};

var getRounds = exports.getRounds = function getRounds() {
  var hash = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  return _bcryptjs2.default.getRounds(hash);
};

var getSalt = exports.getSalt = function getSalt() {
  var hash = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  return _bcryptjs2.default.getSalt(hash);
};

/**
 * Asynchronously
 */

var genSalt = exports.genSalt = function genSalt() {
  var rounds = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];
  var seed_length = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  return new Promise(function (resolve, reject) {
    _bcryptjs2.default.genSalt(rounds, seed_length, function (error, success) {
      if (error) {
        return reject(error);
      }
      return resolve(success);
    });
  });
};

var hash = exports.hash = function hash() {
  var s = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var salt = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

  return new Promise(function (resolve, reject) {
    _bcryptjs2.default.hash(s, salt, function (error, success) {
      if (error) {
        return reject(error);
      }
      return resolve(success);
    });
  });
};

var compare = exports.compare = function compare() {
  var s = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var hash = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  return new Promise(function (resolve, reject) {
    _bcryptjs2.default.compare(s, hash, function (error, success) {
      if (error) {
        return reject(error);
      }
      return resolve(success);
    });
  });
};