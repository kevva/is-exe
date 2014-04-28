# is-exe [![Build Status](https://travis-ci.org/kevva/is-exe.svg?branch=master)](https://travis-ci.org/kevva/is-exe)

> Check if a Buffer/Uint8Array is a EXE file

## Install

```bash
$ npm install --save is-exe
```

```bash
$ component install kevva/is-exe
```

```bash
$ bower install --save is-exe
```

## Usage

```js
var fs = require('fs');
var isExe = require('is-exe');
var buf = fs.readFileSync('foo.exe');

isExe(buf);
// => true
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
