import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Featured1 from '../images/featured/featured1.png'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import Rating from './products/Rating'
import SocialShare from './SocialShare'

const FeaturedItems = () => {
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
			<div style={{ marginTop: '-50px' }}>
				{/* <Container>
					<Row>
						<Col className='text-center py-3 '>
							<h1 className='featuredItems'>Featured Items</h1>
							<div className='container d-flex justify-content-center'>
								<hr className='black-line' />
								<hr className='red-line' />
								<hr className='green-line' />
							</div>
						</Col>
					</Row>
				</Container> */}
				<section className='text-gray-700 body-font'>
					<div className='container px-5 py-24 mx-auto'>
						<div className='flex flex-wrap -m-4'>
							{products.map((product) => (
								<div className='p-4 md:w-1/3'>
									<div className='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
										<Link to={`/product/${product._id}`}>
											<img
												className='lg:h-48 md:h-36 w-full object-cover object-center'
												src={product.image}
												alt='blog'
												style={{ height: '300px' }}
											/>
										</Link>
										<div className='container'>
											<h1
												className='title-font text-lg font-medium text-gray-900 '
												style={{
													textAlign: 'left',
													font:
														' normal normal bold 24px/24px Adobe Garamond Pro',
													letterSpacing: '0px',
													color: '#0A292E',
													opacity: '1',
												}}>
												{product.name}
											</h1>
											<p
												className='tracking-widest text-xs title-font font-medium text-gray-500 mb-1 d-flex justify-content-start'
												style={{ color: '#B12704' }}>
												Price: $ {product.price}
											</p>
											<p className='tracking-widest text-xs title-font font-medium text-gray-500 mb-1 d-flex justify-content-start'>
												{product.rating} from {product.numReviews} Reviews
											</p>
											<Rating
												value={product.rating}
												text={`${product.numReviews} reviews`}
											/>
											<SocialShare />
											<div className='flex items-center flex-wrap mb-2'>
												{/* <Button
													variant='primary'
													className='button-color m-2'
													size='sm'>
													Add to cart <i className='fas fa-plus'></i>
												</Button>{' '} */}
												{/* <span className='text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300'>
													<svg
														className='w-4 h-4 mr-1'
														stroke='currentColor'
														stroke-width='2'
														fill='none'
														stroke-linecap='round'
														stroke-linejoin='round'
														viewBox='0 0 24 24'>
														<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
														<circle cx='12' cy='12' r='3'></circle>
													</svg>
													1.2K
												</span> */}
												{/* <span className='text-gray-600 inline-flex items-center leading-none text-sm'>
													<svg
														className='w-4 h-4 mr-1'
														stroke='currentColor'
														stroke-width='2'
														fill='none'
														stroke-linecap='round'
														stroke-linejoin='round'
														viewBox='0 0 24 24'>
														<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
													</svg>
													6
												</span> */}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* <div
					className='gallery js-flickity'
					data-flickity-options='{ "wrapAround": true }'
					style={{ marginBottom: '100px' }}>
					<div className='featured-1'>
						<div className='card mb-3'>
							<h3 className='card-header'>Card header</h3>
							<div className='card-body'>
								<h5 className='card-title'>Special title treatment</h5>
								<h6 className='card-subtitle text-muted'>
									Support card subtitle
								</h6>
							</div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='d-block user-select-none'
								width='100%'
								height='200'
								aria-label='Placeholder: Image cap'
								focusable='false'
								role='img'
								preserveAspectRatio='xMidYMid slice'
								viewBox='0 0 318 180'
								style={{ fontSize: '1.125rem', textAnchor: 'middle' }}>
								<rect width='100%' height='100%' fill='#868e96'></rect>
								<text x='50%' y='50%' fill='#dee2e6' dy='.3em'>
									Image cap
								</text>
							</svg>
							<div className='card-body'>
								<p className='card-text'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
					<div className='featured-1'>
						<div className='card' style={{ width: '18rem', height: '20rem' }}>
							<img src={Featured1} className='card-img-top' alt='...' />
							<div className='card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='card-text'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<a href='#' className='btn btn-primary'>
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className='featured-1'>
						<div className='card' style={{ width: '18rem', height: '20rem' }}>
							<img src={Featured1} className='card-img-top' alt='...' />
							<div className='card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='card-text'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<a href='#' className='btn btn-primary'>
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className='featured-1'>
						<div className='card' style={{ width: '18rem', height: '20rem' }}>
							<img src={Featured1} className='card-img-top' alt='...' />
							<div className='card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='card-text'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<a href='#' className='btn btn-primary'>
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className='featured-1'>
						<div className='card' style={{ width: '18rem', height: '20rem' }}>
							<img src={Featured1} className='card-img-top' alt='...' />
							<div className='card-body'>
								<h5 className='card-title'>Card title</h5>
								<p className='card-text'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<a href='#' className='btn btn-primary'>
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				</div> */}
				{/* // Featured items footer */}
			</div>
		</>
	)
}

export default FeaturedItems
