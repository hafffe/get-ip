#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getIp = require('./');

const cli = meow([
	'Usage',
	'  $ get-ip',
	'',
	'Examples',
	'  $ get-ip',
	'  192.168.9.58'
]);

if (cli.input.length > 0) {
	console.error('No arguments are expected');
	process.exit(1);
}

getIp().then(res => {
	res.forEach(x => {
		console.log(x);
	});
});
