import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Product from './Product'
import { listProducts } from '../../actions/productActions'
import Message from '../Message'
import Loader from '../Loader'
import FeaturedFooter from '../FeaturedFooter'

const Products = () => {
	const dispatch = useDispatch()

	const productList = useSelector((state) => state.productList)
	const { loading, error, products } = productList

	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])

	return (
		<div>
			<Container>
				<Row>
					<Col className='text-center py-5 '>
						<h1 className='featuredItems'>Featured Products</h1>
						<div className='container d-flex justify-content-center'>
							<hr className='black-line' />
							<hr className='red-line' />
							<hr className='green-line' />
						</div>
					</Col>
				</Row>
			</Container>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Container>
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
				</Container>
			)}

			<FeaturedFooter />
		</div>
	)
}

export default Products
