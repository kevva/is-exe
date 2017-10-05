# is-exe [![Build Status](https://travis-ci.org/kevva/is-exe.svg?branch=master)](https://travis-ci.org/kevva/is-exe)

> Check if a Buffer/Uint8Array is a EXE file


## Install

```
$ npm install is-exe
```


## Usage

```js
const fs = require('fs');
const isExe = require('is-exe');

isExe(fs.readFileSync('foo.exe'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
