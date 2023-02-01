const express = require('express')
const path = require('path')

const app = express()
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const rootDir = require('./utils/paths')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)

app.get('/', (request, response) => {
	response.status(200).send(`
		<div style="text-align: center; margin-top: 10%;">
			<h1>Welcome to the homepage!</h1>
			<p>Click on the links above to navigate to the different pages.</p>
			<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="Pikachu">
		</div>
	`)
})

app.use((request, response) => {
	response.sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(3000, () => console.info('Server is running on port 3000!'))
