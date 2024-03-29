import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../FormContainer'
import { saveShippingAddress } from '../../actions/cartActions'
import CheckoutSteps from '../CheckoutSteps'

const ShippingScreen = ({ history }) => {
	const cart = useSelector((state) => state.cart)
	const { shippingAddress } = cart

	const [address, setAddress] = useState(shippingAddress.address)
	const [city, setCity] = useState(shippingAddress.city)
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
	const [country, setCountry] = useState(shippingAddress.country)

	const dispatch = useDispatch()

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(saveShippingAddress({ address, city, postalCode, country }))
		history.push('/payment')
	}
	return (
		<FormContainer>
			<CheckoutSteps step1 step2 />
			<h1> Shipping</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='address'>
					<Form.Label>Address</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter address'
						required
						value={address}
						onChange={(e) => setAddress(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group controlId='city'>
					<Form.Label>City</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter city'
						required
						value={city}
						onChange={(e) => setCity(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group controlId='postalCode'>
					<Form.Label>Postal code</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter postal code'
						required
						value={postalCode}
						onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group controlId='country'>
					<Form.Label>Country</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter country'
						required
						value={country}
						onChange={(e) => setCountry(e.target.value)}></Form.Control>
				</Form.Group>
				<Button
					type='submit'
					variant='primary'
					className='button-color m-2'
					size='sm'>
					Continue <i className='fas fa-arrow-right'></i>
				</Button>{' '}
			</Form>
		</FormContainer>
	)
}

export default ShippingScreen
