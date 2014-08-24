# is-exe [![Build Status](https://travis-ci.org/kevva/is-exe.svg?branch=master)](https://travis-ci.org/kevva/is-exe)

> Check if a Buffer/Uint8Array is a EXE file

## Install

```sh
$ npm install --save is-exe
```

## Usage

```js
var isExe = require('is-exe');
var read = require('fs').readFileSync;

isExe(read(foo.exe));
// => true
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
