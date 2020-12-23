import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
	const dispatch = useDispatch()

	const productTopRated = useSelector((state) => state.productTopRated)
	const { loading, error, products } = productTopRated

	useEffect(() => {
		dispatch(listTopProducts())
	}, [dispatch])

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant='danger'>{error}</Message>
	) : (
		<>
			<Row>
				<Col className='text-center mt-3'>
					<h1 className='featuredItems' style={{ marginBottom: '-20px' }}>
						Top Rated Arts
					</h1>

					<div className='container d-flex justify-content-center'>
						<hr className='black-line' />
						<hr className='red-line' />
						<hr className='green-line' />
					</div>
				</Col>
			</Row>
			<Carousel pause='hover' className='carousel-bg mt-3'>
				{products.map((product) => (
					<Carousel.Item key={product._id}>
						<Container className='d-flex justify-content-center py-3'>
							<div className='row'>
								<div className='col-sm'>
									<Link to={`/product/${product._id}`}>
										<Image
											src={product.image}
											alt={product.name}
											fluid
											style={{
												width: '500px',
												// padding: '50px',
											}}
										/>
									</Link>
								</div>
								<div className='col-sm'>
									<Link to={`/product/${product._id}`}>
										<Carousel.Caption className='carousel-caption'>
											<div className='container mt-5'>
												{' '}
												<ul
													className='mt-5 d-flex justify-content-center'
													id='terms'>
													<li>
														<strong>
															<h1 style={{ color: 'white' }}>
																{product.name}{' '}
															</h1>
														</strong>
														<strong>
															<p style={{ color: 'white' }}>
																Price:{' '}
																<span style={{ color: '#B12704' }}>
																	${product.price}
																</span>
															</p>
														</strong>
													</li>

													<li></li>
												</ul>
											</div>
										</Carousel.Caption>
									</Link>
								</div>
							</div>
						</Container>
					</Carousel.Item>
				))}
			</Carousel>
		</>
	)
}

export default ProductCarousel
