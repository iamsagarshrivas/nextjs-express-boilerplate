/* eslint-disable no-unused-vars */
var path  = require('path')
var merge = require('lodash/merge')

/* istanbul ignore next */
const requireProcessEnv = (name) => {
	if (!process.env[name]) {
		throw new Error('You must set the ' + name + ' environment variable')
	}
	return process.env[name]
}

/* istanbul ignore next */
// if (process.env.NODE_ENV !== 'production') {
// 	const dotenv = require('dotenv-safe')
// 	dotenv.load({
// 		path: path.join(__dirname, '../../.env'),
// 		sample: path.join(__dirname, '../../.env.example')
// 	})
// }

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 9001,
    ip: process.env.IP || '0.0.0.0',
    appRoot: process.env.API_ROOT || '',
    webDomain: '',
  },
  test: {},
  development: {
    ftp: {
    }
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080,
  }
}

module.exports = merge(config.all, config[config.all.env])
