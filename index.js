'use strict';
const os = require('os');

const getIp = family => Object.values(os.networkInterfaces()).reduce((arr, interfce) => arr.concat(
	Object.values(interfce)
		.filter(x => x.family === family && !x.internal)
		.map(x => x.address)
), []);

module.exports = () => getIp('IPv4');
module.exports.v6 = () => getIp('IPv6');
