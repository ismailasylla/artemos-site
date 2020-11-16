import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Product from './Product'
import FeaturedFooter from '../FeaturedFooter'
import axios from 'axios'

const Products = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products')
			setProducts(data)
		}
		fetchProducts()
	}, [])
	return (
		<div>
			<Container>
				<Row>
					<Col className='text-center py-3 '>
						<h1 className='featuredItems'>Featured Products</h1>
						<div className='container d-flex justify-content-center'>
							<hr className='black-line' />
							<hr className='red-line' />
							<hr className='green-line' />
						</div>
					</Col>
				</Row>
			</Container>

			<Container>
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			</Container>
			<FeaturedFooter />
		</div>
	)
}

export default Products
