'use strict';

var isExe = require('../');
var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');

test('should detect EXE from buffer', function (t) {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixtures/test.exe'), 0, 2, function (err, buf) {
		t.assert(!err, err);
		t.assert(isExe(buf));
	});
});
