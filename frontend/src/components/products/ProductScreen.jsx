import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../../actions/productActions'
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Container,
	Form,
} from 'react-bootstrap'
import Rating from './Rating'
import Loader from '../Loader'
import Message from '../Message'

const ProductScreen = ({ history, match }) => {
	const [qty, setQty] = useState(1)

	const dispatch = useDispatch()

	const productDetails = useSelector((state) => state.productDetails)

	const { loading, error, product } = productDetails

	useEffect(() => {
		dispatch(listProductDetails(match.params.id))
	}, [dispatch, match])

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`)
	}

	return (
		<Container>
			<Link to='/products'>
				<Button variant='primary' className='button-color m-2 my-3' size='sm'>
					<i className='fas fa-arrow-left'></i> Back
				</Button>{' '}
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image src={product.image} alt={product.name}></Image>
					</Col>
					<Col md={3}>
						<ListGroup>
							<ListGroup.Item>
								<h2>{product.name}</h2>
							</ListGroup.Item>
						</ListGroup>
						<ListGroup>
							<div className=' my-2' style={{ marginLeft: '14px' }}>
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</div>
						</ListGroup>
						<ListGroup variant='flush'>
							<ListGroup.Item>Price: $ {product.price}</ListGroup.Item>
						</ListGroup>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								Description: {product.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Price: </Col>
										<Col>
											<strong>$ {product.price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Status: </Col>
										<Col>
											{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
										</Col>
									</Row>
								</ListGroup.Item>
								{product.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Qty</Col>
											<Col>
												<Form.Control
													as='select'
													value={qty}
													onChange={(e) => setQty(e.target.value)}>
													{[...Array(product.countInStock).keys()].map((x) => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}
								<ListGroup.Item>
									<Button
										onClick={addToCartHandler}
										disabled={product.countInStock === 0}
										className='btn btn-block button-color my-3'
										variant='primary'
										type='button'>
										<i className='fab fa-opencart fa-2x'></i> Add To Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</Container>
	)
}

export default ProductScreen
