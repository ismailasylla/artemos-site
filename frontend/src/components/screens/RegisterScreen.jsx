import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { register } from '../../actions/userActions'
import FormContainer from '../FormContainer'
import Logo from '../../images/logo/logo.png'

const RegisterScreen = ({ location, history }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState(null)

	const dispatch = useDispatch()

	const userRegister = useSelector((state) => state.userRegister)

	const { loading, error, userInfo } = userRegister

	const redirect = location.search ? location.search.split('=')[1] : '/'

	useEffect(() => {
		if (userInfo) {
			history.push(redirect)
		}
	}, [history, userInfo, redirect])

	const submitHandler = (e) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			setMessage('Passwords do not match')
		} else {
			dispatch(register(name, email, password))
		}
	}
	return (
		<>
			<h1 className='logo d-flex justify-content-center'>
				<img src={Logo} alt='' style={{ width: '144px' }} />
			</h1>
			<div className='container loginRegister-bg  mb-5 '>
				<FormContainer>
					<h1 style={{ color: 'rgb(21, 71, 44)' }}>Sign Up</h1>
					{message && <Message variant='danger'>{message}</Message>}
					{error && <Message variant='danger'>{error}</Message>}
					{loading && <Loader />}
					<Form onSubmit={submitHandler}>
						<Form.Group controlId='name'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='name'
								placeholder='Enter Name'
								value={name}
								onChange={(e) => setName(e.target.value)}></Form.Control>
						</Form.Group>
						<Form.Group controlId='email'>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}></Form.Control>
						</Form.Group>
						<Form.Group controlId='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Enter password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}></Form.Control>
						</Form.Group>
						<Form.Group controlId='confirmPassword'>
							<Form.Label>Comfirm Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Confirm password'
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}></Form.Control>
						</Form.Group>
						<Button
							type='submit'
							variant='primary'
							className='button-color m-2'
							size='sm'>
							<i className='fas fa-user'></i> Register
						</Button>{' '}
					</Form>
					<Row className='py-3'>
						<Col>
							Already have an account?{' '}
							<Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>
								<strong style={{ color: '#145059' }}>Login</strong>{' '}
							</Link>
						</Col>
					</Row>
				</FormContainer>
			</div>
		</>
	)
}

export default RegisterScreen
