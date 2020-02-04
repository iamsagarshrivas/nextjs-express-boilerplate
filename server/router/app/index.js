const router = require('express').Router();
const app = require('../../middleware/next')
const handle = app.getRequestHandler();

router.get('/', (req, res) => {
	return app.render(req, res, '/app/public', req.query)
})

router.get('/public', (req, res) => {
	console.log('in public route');
	
	return app.render(req, res, '/app/public', req.query)
})


router.all('*', (req, res) => {
	return handle(req, res)
})

module.exports = router;