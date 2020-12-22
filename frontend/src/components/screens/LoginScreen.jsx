import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { login } from '../../actions/userActions'
import FormContainer from '../FormContainer'
import Logo from '../../images/logo/logo.png'

const LoginScreen = ({ location, history }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)

	const { loading, error, userInfo } = userLogin

	const redirect = location.search ? location.search.split('=')[1] : '/'

	useEffect(() => {
		if (userInfo) {
			history.push(redirect)
		}
	}, [history, userInfo, redirect])

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(login(email, password))
	}
	return (
		<>
			<h1 className='logo d-flex justify-content-center'>
				<img src={Logo} alt='' style={{ width: '144px' }} />
			</h1>
			<div className='container loginRegister-bg  mb-5'>
				<FormContainer>
					<h1 style={{ color: 'rgb(21, 71, 44)' }}>Login</h1>
					{error && <Message variant='danger'>{error}</Message>}
					{loading && <Loader />}
					<Form onSubmit={submitHandler}>
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
						<Button
							type='submit'
							variant='primary'
							className='button-color m-2'
							size='sm'>
							<i className='fas fa-user'></i> Sign In
						</Button>{' '}
					</Form>
					<Row className='py-3'>
						<Col>
							Don't have an account?{' '}
							<Link
								to={redirect ? `/register?redirect=${redirect}` : `/register`}>
								<strong style={{ color: '#145059' }}>Register</strong>{' '}
							</Link>
						</Col>
					</Row>
				</FormContainer>
			</div>
		</>
	)
}

export default LoginScreen
