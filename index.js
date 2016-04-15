'use strict';
const os = require('os');
const interfaces = os.networkInterfaces();

module.exports = function () {
	const addresses = [];

	return new Promise(function (resolve) {
		Object.keys(interfaces).forEach(function (x) {
			Object.keys(interfaces[x]).forEach(function (y) {
				const address = interfaces[x][y];
				if (address.family === 'IPv4' && !address.internal) {
					addresses.push(address.address);
				}
			});
		});

		resolve(addresses);
	});
};
