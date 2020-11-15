import React from 'react'
import { Link } from 'react-router-dom'
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Container,
} from 'react-bootstrap'

import Rating from './Rating'
import products from '../../products'
const ProductScreen = ({ match }) => {
	const product = products.find((p) => p._id === match.params.id)
	return (
		<Container>
			<Link to='/products'>
				<Button variant='primary' className='button-color m-2 my-3' size='sm'>
					<i className='fas fa-arrow-to-left'></i> Back
				</Button>{' '}
			</Link>
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
						<ListGroup.Item>Description: {product.description}</ListGroup.Item>
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
							<ListGroup.Item>
								<Button
									disabled={product.countInStock === 0}
									className='btn btn-block button-color my-3'
									variant='primary'
									type='button'>
									Add To Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default ProductScreen
