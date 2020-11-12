import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import products from '../../products'
import Product from './Product'
import FeaturedFooter from '../FeaturedFooter'

const Products = () => {
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
						<Col sm={12} md={6} lg={4} xl={3}>
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
