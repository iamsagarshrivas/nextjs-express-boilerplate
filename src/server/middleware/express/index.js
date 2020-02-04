const express = require('express');

module.exports = (apiRoot, routes) => {
	const app = express();
	app.use(apiRoot, routes);

	return app;
}