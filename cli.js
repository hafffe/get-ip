#!/usr/bin/env node
'use strict';
const clipboardy = require('clipboardy');
const meow = require('meow');
const getIp = require('.');

const cli = meow(`
	Usage
	  $ get-ip

	Options
	  -c, --copy  Copy first IP to clipboard
	  -6, --ipv6  Use IPv6

	Examples
	  $ get-ip
	  192.168.9.58

	  $ get-ip --copy
	  192.168.9.58
`, {
	alias: {
		c: 'copy',
		6: 'ipv6'
	}
});

const addresses = cli.flags.ipv6 ? getIp.v6() : getIp();

if (cli.flags.copy && addresses.length > 0) {
	clipboardy.writeSync(addresses[0]);
}

for (const x of addresses) {
	console.log(x);
}
