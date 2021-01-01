import React, { useState, useEffect } from 'react'
import { ImageZoom } from 'react-simple-image-zoom'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	listProductDetails,
	createProductReview,
} from '../../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../../constants/productConstants'
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
	const [rating, setRating] = useState(0)
	const [comment, setComment] = useState('')

	const dispatch = useDispatch()
	const productDetails = useSelector((state) => state.productDetails)
	const { loading, error, product } = productDetails

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const productReviewCreate = useSelector((state) => state.productReviewCreate)
	const {
		success: successProductReview,
		loading: loadingProductReview,
		error: errorProductReview,
	} = productReviewCreate

	useEffect(() => {
		if (successProductReview) {
			setRating(0)
			setComment('')
		}
		if (!product._id || product._id !== match.params.id) {
			dispatch(listProductDetails(match.params.id))
			dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
		}
	}, [dispatch, match, product._id, successProductReview])

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(
			createProductReview(match.params.id, {
				rating,
				comment,
			}),
		)
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
				<>
					<Row>
						<Col md={6}>
							<ImageZoom
								portalId='portal'
								largeImgSrc={product.image}
								imageWidth={540}
								imageHeight={540}
								zoomContainerWidth={640}
								activeClass='my-active'
								portalStyle={Object.assign(
									{ ...ImageZoom.defaultPortalStyle },
									{ top: '0px' },
								)}
								zoomScale={5}
								responsive={true}>
								<Image src={product.image} alt={product.name}></Image>
							</ImageZoom>
						</Col>
						<div id='portal' className='slick-side ' />
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
								<ListGroup.Item>
									Price:
									<span style={{ color: '#B12704' }} className='ml-2'>
										$ {product.price}
									</span>{' '}
								</ListGroup.Item>
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
												<strong style={{ color: '#B12704' }}>
													$ {product.price}
												</strong>
											</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										<Row>
											<Col>Status: </Col>
											<Col>
												<span style={{ color: 'green' }}>
													{product.countInStock > 0
														? 'In Stock'
														: 'Out Of Stock'}
												</span>
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
														{[...Array(product.countInStock).keys()].map(
															(x) => (
																<option key={x + 1} value={x + 1}>
																	{x + 1}
																</option>
															),
														)}
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
					<Row>
						<Col md={6} className='mt-3'>
							<h2>Reviews</h2>
							{product.reviews.length === 0 && <Message>No Reviews</Message>}
							<ListGroup variant='flush'>
								{product.reviews.map((review) => (
									<ListGroup.Item key={review._id}>
										<img
											src='https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'
											alt=''
											className='rounded-circle mb-2'
											style={{ width: '50px' }}
										/>
										<strong>{review.name}</strong>
										<Rating value={review.rating} />
										<p>{review.createdAt.substring(0, 10)}</p>
										<p>{review.comment}</p>
									</ListGroup.Item>
								))}
								<ListGroup.Item>
									<h2>Write a Customer Review</h2>
									{successProductReview && (
										<Message variant='success'>
											Review submitted successfully
										</Message>
									)}
									{loadingProductReview && <Loader />}
									{errorProductReview && (
										<Message variant='danger'>{errorProductReview}</Message>
									)}
									{userInfo ? (
										<Form onSubmit={submitHandler}>
											<Form.Group controlId='rating'>
												<Form.Label>Rating</Form.Label>
												<Form.Control
													as='select'
													value={rating}
													onChange={(e) => setRating(e.target.value)}>
													<option value=''>Select...</option>
													<option value='1'>1 - Poor</option>
													<option value='2'>2 - Fair</option>
													<option value='3'>3 - Good</option>
													<option value='4'>4 - Very Good</option>
													<option value='5'>5 - Excellent</option>
												</Form.Control>
											</Form.Group>
											<Form.Group controlId='comment'>
												<Form.Label>Comment</Form.Label>
												<Form.Control
													as='textarea'
													row='3'
													value={comment}
													onChange={(e) =>
														setComment(e.target.value)
													}></Form.Control>
											</Form.Group>
											<Button
												type='submit'
												variant='primary'
												className='button-color'
												disabled={loadingProductReview}>
												Submit
											</Button>
										</Form>
									) : (
										<Message>
											Please <Link to='/login'>sign in</Link> to write a review{' '}
										</Message>
									)}
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</>
			)}
		</Container>
	)
}

export default ProductScreen
