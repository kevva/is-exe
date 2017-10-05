'use strict';
module.exports = buf => {
	if (!buf || buf.length < 2) {
		return false;
	}

	return buf[0] === 0x4D && buf[1] === 0x5A;
};
