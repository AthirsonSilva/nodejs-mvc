const express = require('express')
const Router = express.Router()
const path = require('path')

const rootDir = require('../utils/paths')

Router.use('/', (request, response) => {
	response.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = Router
