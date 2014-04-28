/*global describe, it */
'use strict';

var assert = require('assert');
var isExe = require('../');
var path = require('path');
var readChunk = require('read-chunk');

describe('isExe()', function () {
    function check(file) {
        return isExe(readChunk.sync(file, 0, 2));
    }

    it('should detect EXE from buffer', function (cb) {
        assert(check(path.join(__dirname, 'fixtures/test.exe')));
        cb();
    });
});
