'use strict';
var os = require('os');
var interfaces = os.networkInterfaces();

module.exports = function () {
	var addresses = [];

	Object.keys(interfaces).forEach(function (x) {
		Object.keys(interfaces[x]).forEach(function (y) {
			var address = interfaces[x][y];

			if (address.family === 'IPv4' && !address.internal) {
				addresses.push(address.address);
			}
		});
	});

	return addresses;
};
