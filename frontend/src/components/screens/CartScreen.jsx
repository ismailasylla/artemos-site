import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	Container,
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
	ListGroupItem,
} from 'react-bootstrap'
import Message from '../../components/Message'
import { addToCart, removeFromCart } from '../../actions/cartActions'
import { Helmet } from 'react-helmet'

const CartScreen = ({ match, location, history }) => {
	const productId = match.params.id

	const qty = location.search ? Number(location.search.split('=')[1]) : 1

	const dispatch = useDispatch()

	const cart = useSelector((state) => state.cart)

	const { cartItems } = cart

	console.log(cartItems)

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty))
		}
	}, [dispatch, productId, qty])

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id))
	}
	const checkOutHandler = () => {
		history.push('/login?redirect=shipping')
	}

	return (
		<Container className='py-5'>
			<Helmet>
				<title>Artemos | Cart</title>
				<meta
					name='description'
					content='We are among the top art seller worldwide'></meta>
				<meta
					name='keywords'
					content='Arts, Art, Buy Arts alphaseed Technology, Alphaseed '></meta>
			</Helmet>
			<Link to='/products'>
				<Button variant='primary' className='button-color m-2 my-3' size='sm'>
					<i className='fas fa-arrow-left'></i> Go Back
				</Button>{' '}
			</Link>
			<Row>
				<Col md={8}>
					<h1>Shopping Cart</h1>
					{cartItems.length === 0 ? (
						<Message>
							<strong>Your Cart is empty</strong>
							<Link
								to='/products'
								style={{ textDecoration: 'none', color: '#145059' }}>
								{' '}
								<strong>
									<i className='fas fa-arrow-left'></i> Go Back
								</strong>
							</Link>
						</Message>
					) : (
						<ListGroup variant='flash'>
							{cartItems.map((item) => (
								<ListGroupItem key={item.product}>
									<Row>
										<Col md={2}>
											<Link to={`/product/${item.product}`}>
												<Image src={item.image} alt={item.name} fluid rounded />
											</Link>
										</Col>
										<Col md={3}>
											<Link to={`/product/${item.product}`}>{item.name}</Link>
										</Col>
										<Col md={2}>${item.price}</Col>
										<Col md={2}>
											<Form.Control
												as='select'
												value={item.qty}
												onChange={(e) =>
													dispatch(
														addToCart(item.product, Number(e.target.value)),
													)
												}>
												{[...Array(item.countInStock).keys()].map((x) => (
													<option key={x + 1} value={x + 1}>
														{x + 1}
													</option>
												))}
											</Form.Control>
										</Col>
										<Col md={2}>
											<Button
												type='button'
												variant='light'
												onClick={() => removeFromCartHandler(item.product)}>
												<i className='fas fa-trash'></i>
											</Button>
										</Col>
									</Row>
								</ListGroupItem>
							))}
						</ListGroup>
					)}
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h2>
									Subtotal{''}
									<span className='badge badge-pill badge-danger m-1'>
										<strong>
											{cartItems.reduce((acc, item) => acc + item.qty, 0)}{' '}
										</strong>
									</span>
									items
								</h2>
								$
								{cartItems
									.reduce((acc, item) => acc + item.qty * item.price, 0)
									.toFixed(2)}
							</ListGroup.Item>
							<ListGroupItem>
								<Button
									onClick={checkOutHandler}
									type='button'
									className='btn-block button-color my-3'
									disabled={cartItems.length === 0}>
									<i className='fas fa-money-check'></i> Proceed To Checkout
								</Button>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default CartScreen
