#!/usr/bin/env node
'use strict';
var meow = require('meow');
var getIp = require('./');

var cli = meow([
	'Usage',
	'  $ get-ip',
	'',
	'Examples',
	'  $ get-ip',
	'  [192.168.9.58, 192.168.10.35]'
]);

if (cli.input.length > 0) {
	console.error('No arguments are expected');
	process.exit(1);
}

console.log(getIp());
