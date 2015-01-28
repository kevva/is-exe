# is-exe [![Build Status](http://img.shields.io/travis/kevva/is-exe/master.svg?style=flat)](https://travis-ci.org/kevva/is-exe)

> Check if a Buffer/Uint8Array is a EXE file

## Install

```sh
$ npm install --save is-exe
```

## Usage

```js
var isExe = require('is-exe');
var read = require('fs').readFileSync;

isExe(read('foo.exe'));
//=> true
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
