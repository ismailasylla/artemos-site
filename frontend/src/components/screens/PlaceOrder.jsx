import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import CheckoutSteps from '../CheckoutSteps'
const PlaceOrder = () => {
	const cart = useSelector((state) => state.cart)

	// Calculate prices

	const addDecimals = (num) => {
		return (Math.round(num * 100) / 100).toFixed(2)
	}

	cart.itemsPrice = addDecimals(
		cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
	)

	cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 1)

	cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))

	cart.totalPrice = addDecimals(
		Number(cart.itemsPrice) +
			Number(cart.shippingPrice) +
			Number(cart.taxPrice),
	)

	const PlaceOrderHandler = () => {
		console.log('order placed')
	}

	return (
		<div className='container py-5' style={{ width: '70%' }}>
			<CheckoutSteps step1 step2 step3 step4 />
			<Row>
				<Col>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>Shipping</h2>
							<p>
								<strong> Address: </strong>
								{cart.shippingAddress.address} {cart.shippingAddress.city}
								{cart.shippingAddress.postaCode} {cart.shippingAddress.country}
							</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Payment Method</h2>
							<strong>Method:{cart.paymentMethod} </strong>
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Order Items</h2>
							{cart.cartItems.length === 0 ? (
								<Message>Your cart is empty</Message>
							) : (
								<ListGroup variant='flush'>
									{cart.cartItems.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row>
												<Col md={1}>
													<Image
														src={item.image}
														alt={item.name}
														fluid
														rounded></Image>
												</Col>
												<Col>
													<Link to={`/products/${item.product}`}>
														{item.name}
													</Link>
												</Col>
												<Col md={4}>
													{item.qty} x ${item.price} = ${item.qty * item.price}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4} className='py-5'>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h2>Order Summary</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Items</Col>
									<Col>${cart.itemsPrice}</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Shipping</Col>
									<Col>${cart.shippingPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Tax</Col>
									<Col>${cart.taxPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Total</Col>
									<Col>${cart.totalPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									type='button'
									variant='primary'
									className='btn-block button-color m-2'
									size='sm'
									onclick={PlaceOrderHandler}
									disabled={cart.cartItems === 0}>
									Place Order <i className='fas fa-arrow-right'></i>
								</Button>{' '}
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default PlaceOrder
