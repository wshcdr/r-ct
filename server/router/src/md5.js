/**
 * Created by m on 16-4-21.
 */
var crypto = require('crypto');

exports.md5 = function (str) {
    return crypto.createHash('md5').update(str).digest('hex');
};