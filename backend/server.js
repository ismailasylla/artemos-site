const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
	res.send('Server Running...')
})

// Api to get all the products
app.get('/api/products', (req, res) => {
	res.json(products)
})

// Api to get single products
app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id)

	res.json(product)
})

// Running server port.
let port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`server running on port ${port}`)
})
