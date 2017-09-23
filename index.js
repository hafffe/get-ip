'use strict';
const os = require('os');

const getIp = family => {
	const interfaces = os.networkInterfaces();

	return Object.keys(interfaces).reduce((arr, x) => {
		const interfce = interfaces[x];

		return arr.concat(Object.keys(interfce)
			.filter(x => interfce[x].family === family && !interfce[x].internal)
			.map(x => interfce[x].address));
	}, []);
};

module.exports = () => getIp('IPv4');
module.exports.v6 = () => getIp('IPv6');
