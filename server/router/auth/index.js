const router = require('express').Router();
const app = require('../../middleware/next')
const handle = app.getRequestHandler();

router.get('/', (req, res) => {
	return app.render(req, res, '/auth/sign-in', req.query)
})

router.get('/sign-in', (req, res) => {
	return app.render(req, res, '/auth/sign-in', req.query)
})

router.all('*', (req, res) => {
	return handle(req, res)
})

module.exports = router;