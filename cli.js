#!/usr/bin/env node
'use strict';
const pbcopy = require('child_process').spawn('pbcopy');
const meow = require('meow');
const getIp = require('./');

const cli = meow(`
	Usage
	  $ get-ip

	Options
	  --copy, -c  Copy first returned ip address.

	Examples
	  $ get-ip --copy
	  192.168.9.58
`, {
	alias: {
		c: 'copy'
	}
});

if (cli.input.length > 0) {
	console.error('No arguments are expected');
	process.exit(1);
}

const copy = data => {
	pbcopy.stdin.write(data);
	pbcopy.stdin.end();
};

getIp().then(res => {
	res.forEach((x, i) => {
		if (i < 1 && cli.flags.copy) {
			copy(x);
		}

		console.log(x);
	});
});
