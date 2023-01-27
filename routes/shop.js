const express = require('express')
const Router = express.Router()

Router.use('/', (req, res) => {
	console.log('In another middleware!')
	res.send('<h1>Hello from Express!</h1>')
})

module.exports = Router
