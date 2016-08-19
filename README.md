## Usage

`npm install https://github.com/oMatej/Promise-bcryptjs.git --save`

```
// ES6
import bcrypt from 'promise-bcryptjs';
// ES5
const bcrypt = require('promise-bcryptjs');
```

### Synchronously

```
let salt = bcrypt.genSaltSync(10);

let hash = bcrypt.hashSync('toHash', salt);

let isCorrect = bcrypt.compareSync('inputPassword', hash);
```

### Asynchronously

```
// Async/Await
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    throw err;
  }
}
// Promise
const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10)
    .then(salt => bcrypt.hash(password, salt))
    .then(hash => resolve(hash))
    .catch(err => reject(err));
  });
}
// Async/Await
const comparePassword = (password, hash) => {
  try {
    const isCorrect = await bcrypt.compare(password, hash);
    if (!isCorrect) throw { message: 'Wrong password.' };
    return isCorrect;
  } catch (err) {
    throw err;
  }
}
// Promise
const comparePassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash)
    .then(isCorrect => {
      if (!isCorrect) return reject({ message: 'Wrong password.' });
      else return resolve(isCorrect);
    }).catch(err => reject(err));
  });
}
```
