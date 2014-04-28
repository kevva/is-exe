'use strict';

/**
 * Check if a Buffer/Uint8Array is a EXE file
 *
 * @param {Buffer} buf
 * @api public
 */

module.exports = function (buf) {
    if (!buf || buf.length < 2) {
        return false;
    }

    return buf[0] === 77 && buf[1] === 90;
};
