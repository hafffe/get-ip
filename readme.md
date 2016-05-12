# get-ip [![Build Status](https://travis-ci.org/alonalon/get-ip.svg?branch=master)](https://travis-ci.org/alonalon/get-ip)

> Simple cli tool for get your internal ip addresses


## Install

```
$ npm install --save get-ip
```


## Usage

```js
const getIp = require('get-ip');

getIp().then(res => console.log(res));
//=> ['192.168.9.104', '192.168.9.104']
```

## API

### getIp()
Returns an object with ip addresses

## CLI

```
$ npm install --global get-ip
```

```
$ get-ip --help

  Usage
    get-ip

  Examples
    $ get-ip
    '192.168.9.46'
    '192.168.1.60'
```


## License

MIT © [alonalon](http://github.com/alonalon)
