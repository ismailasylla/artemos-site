import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
	res.send('Server Running...')
})

// Api routes

app.use('/api/products', productRoutes)

// Handleling errors with custom messages
app.use(notFound)

app.use(errorHandler)

// Running server port.
const port = process.env.PORT || 5000

app.listen(port, () => {
	console.log(
		`server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow
			.bold,
	)
})
