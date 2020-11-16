import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()

// @desc to Fetch all products
// @route   Get /api/products
// @access  Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({})
		res.json(products)
	}),
)

// @desc to Fetch a single product
// @route   Get /api/products/:id
// @access  Public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id)
		if (product) {
			res.json(product)
		} else {
			res.status(404).json({ messages: 'Product not found!' })
		}

		res.json(product)
	}),
)

export default router
