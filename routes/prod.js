const express = require('express')
const fs = require('fs')

const router = express.Router()

result = JSON.parse(fs.readFileSync('./db/db.json'))

router.get('/', (req, res, next) => {
	res.status(200).send('Done');
	console.log(req.query)
})

router.get('/:trig/:value', (req, res, next) => {
	res.status(200).json({
		"Raw Response": req.params
	})
	result[req.params.trig] = req.params.value
	fs.writeFile('./db/db.json', JSON.stringify(result, null, 4))
})


router.use((req, res, next) => {
	res.status(404).json({
		"Not Found in Products": req.path
	})
});

module.exports = router