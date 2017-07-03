'use strict';
const os = require('os');

module.exports = () => {
	const interfaces = os.networkInterfaces();
	const addresses = [];

	return new Promise(resolve => {
		Object.keys(interfaces).forEach(x => {
			Object.keys(interfaces[x]).forEach(y => {
				const address = interfaces[x][y];

				if (address.family === 'IPv4' && !address.internal) {
					addresses.push(address.address);
				}
			});
		});

		resolve(addresses);
	});
};
