#!/usr/bin/env node
'use strict';
const clipboardy = require('clipboardy');
const meow = require('meow');
const getIp = require('./');

const cli = meow([
	'Usage',
	'  $ get-ip',
	'',
	'Options',
	'  --copy    copy first ip to clipboard',
	'',
	'Examples',
	'  $ get-ip',
	'  192.168.9.58',
	'',
	'  $ get-ip --copy',
	'  192.168.9.58'
], {
	alias: {
		c: 'copy'
	}
});

getIp().then(res => {
	res.forEach((x, i) => {
		if (cli.flags.copy && i === 0) {
			clipboardy.writeSync(x);
		}

		console.log(x);
	});
});
