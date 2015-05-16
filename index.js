'use strict';

module.exports = function (buf) {
	if (!buf || buf.length < 2) {
		return false;
	}

	return buf[0] === 0x4d && buf[1] === 0x5a;
};
