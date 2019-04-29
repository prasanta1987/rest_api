const express = require('express')
const app = express()
const prodRoute = require('./routes/prod')


const test = async (req, res, next) => {
	if(req.headers.uid == '1234'){
	next()
	} else {
		res.status(401).json({
			"message" : "UID Missing"
		})
	}
}


app.use(test)
app.use('/products', prodRoute)

app.use((req, res, next) => {
	res.status(404).json({
		"Not Found": req.path
	})
});


module.exports = app