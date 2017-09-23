# get-ip [![Build Status](https://travis-ci.org/alonalon/get-ip.svg?branch=master)](https://travis-ci.org/alonalon/get-ip)

> Simple CLI tool for get your internal IP addresses


## Install

```
$ npm install get-ip
```


## Usage

```js
const getIp = require('get-ip');

getIp();
//=> ['192.168.9.104', '192.168.9.104']
```

## API

### getIp()

Returns an `Array` of IPv4 addresses.

### getIp.v6()

Returns an `Array` of IPv6 addresses.


## CLI

```
$ npm install --global get-ip
```

```
$ get-ip --help

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
```


## License

MIT © [alonalon](https://github.com/alonalon)
