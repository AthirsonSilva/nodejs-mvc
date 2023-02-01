const express = require('express')
const Router = express.Router()
const path = require('path')

const rootDir = require('../utils/paths')

Router.get('/add-product', (request, response) => {
	// renders html file
	response.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

Router.post('/add-product', (request, response) => {
	console.log(request.body)
	response.redirect('/')
})

Router.post('/product', (request, response) => {
	response.redirect('/')
})

module.exports = Router
