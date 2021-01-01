import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Signature from '../Signature'
const Product = ({ product }) => {
	return (
		<>
			<Row>
				<Col className='text-center  '>
					{/* <h1 className='featuredItems'>Arts</h1> */}
					<Signature style={{ width: '150px' }} />
					<div className='container d-flex justify-content-center'>
						<hr className='black-line' />
						<hr className='red-line' />
						<hr className='green-line' />
					</div>
				</Col>
			</Row>
			{/* <Card className='my-3 p-3 rounded '>
				<Link to={`/product/${product._id}`}>
					<Card.Img src={product.image} variant='top' />
				</Link>
				<Card.Body>
					<Link to={`/product/${product._id}`}>
						<Card.Title as='div'>
							{' '}
							<strong>{product.name}</strong>
						</Card.Title>
					</Link>
					<Card.Text as='div'>
						<div className='my-3'>
							{product.rating} from {product.numReviews} Reviews
						</div>
					</Card.Text>
					<Card.Text as='div'>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
						/>
					</Card.Text>
					<Card.Text as='h5' style={{ color: '#B12704' }}>
						$ {product.price}{' '}
					</Card.Text>
				</Card.Body>
				<Button variant='primary' className='button-color m-2' size='sm'>
					Add to cart <i className='fab fa-opencart'></i>
				</Button>{' '} 
			</Card> */}

			<div className='p-4'>
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
								font: ' normal normal bold 24px/24px Adobe Garamond Pro',
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
					</div>
				</div>
			</div>
		</>
	)
}

export default Product
