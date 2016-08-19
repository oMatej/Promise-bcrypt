'use strict'

import bcrypt from 'bcryptjs';

/**
 * Synchronously
 */

export const genSaltSync = (rounds = 10, seed_length = null) => {
  return bcrypt.genSaltSync(rounds, seed_length);
}

export const hashSync = (s = '', salt = 10) => {
  return bcrypt.hashSync(s, salt);
}

export const compareSync = (s = '', hash = '') => {
  return bcrypt.compareSync(s, hash);
}

export const getRounds = (hash = '') => {
  return bcrypt.getRounds(hash);
}

export const getSalt = (hash = '') => {
  return bcrypt.getSalt(hash);
}

/**
 * Asynchronously
 */

export const genSalt = (rounds = 10, seed_length = null) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(rounds, seed_length, (error, success) => {
      if (error) {
        return reject(error);
      }
      return resolve(success);
    });
  });
}

export const hash = (s = '', salt = 10) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(s, salt, (error, success) => {
      if (error) {
        return reject(error);
      }
      return resolve(success);
    });
  });
}

export const compare = (s = '', hash = '') => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(s, hash, (error, success) => {
      if (error) {
        return reject(error);
      }
      return resolve(success);
    });
  });
}
