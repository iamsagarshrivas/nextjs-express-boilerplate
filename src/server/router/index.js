const router = require('express').Router(); 
const app = require('../middleware/next');
const handle = app.getRequestHandler();
const authRoute = require('./auth');
const appRoute = require('./app')

router.use('/auth', authRoute)

router.use('/app', appRoute)

router.all('*', (req, res) => {
	return handle(req, res)
})

module.exports = router;