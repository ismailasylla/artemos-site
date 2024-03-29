import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
	const progressStyle = {
		color: '#097958',
		fontWeight: 'bold',
	}
	return (
		<Nav className='justify-content-center mb-4'>
			<Nav.Item>
				{step1 ? (
					<LinkContainer to='/login' style={progressStyle}>
						<Nav.Link>
							<i className='far fa-check-circle'>Sign In</i>
						</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Sign In</Nav.Link>
				)}
			</Nav.Item>
			<Nav.Item>
				{step2 ? (
					<LinkContainer to='/shipping' style={progressStyle}>
						<Nav.Link>
							<i className='far fa-check-circle'>Shipping</i>
						</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Shipping</Nav.Link>
				)}
			</Nav.Item>
			<Nav.Item>
				{step3 ? (
					<LinkContainer to='/payment' style={progressStyle}>
						<Nav.Link>
							<i className='far fa-check-circle'>Payment</i>
						</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Payment</Nav.Link>
				)}
			</Nav.Item>
			<Nav.Item>
				{step4 ? (
					<LinkContainer to='/placeorder' style={progressStyle}>
						<Nav.Link>
							<i className='far fa-check-circle'>Place Order</i>
						</Nav.Link>
					</LinkContainer>
				) : (
					<Nav.Link disabled>Place Order</Nav.Link>
				)}
			</Nav.Item>
		</Nav>
	)
}

export default CheckoutSteps
