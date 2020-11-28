import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	Navbar,
	Nav,
	Container,
	Form,
	NavDropdown,
	Button,
} from 'react-bootstrap'
import { logout } from '../actions/userActions'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Logo from '../images/logo/logo.png'

const Header = () => {
	const dispatch = useDispatch()
	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}
	return (
		<header>
			<Navbar bg='light' expand='lg'>
				<Container>
					<LinkContainer to='/' style={{ textDecoration: 'none' }}>
						<Navbar.Brand className='logo '>
							<img src={Logo} alt='' style={{ width: '144px' }} />
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<NavDropdown title='Bye' id='basic-nav-dropdown'>
								<LinkContainer
									to='/products'
									style={{ textDecoration: 'none' }}>
									<NavDropdown.Item>Arts</NavDropdown.Item>
								</LinkContainer>

								<NavDropdown.Item href='/Watches'>Watches</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>
									Separated link
								</NavDropdown.Item>
							</NavDropdown>

							<Nav.Link href='#link'>Sell</Nav.Link>
							<NavDropdown title='Services' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>Fine Art</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Collectible
								</NavDropdown.Item>

								<NavDropdown.Item href='#action/3.3'>Wealth</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.3'>
									Tokenization
								</NavDropdown.Item>
							</NavDropdown>
							{/* <LinkContainer to='/about' style={{ textDecoration: 'none' }}>
								<Nav.Link>About Us</Nav.Link>
							</LinkContainer> */}
							<LinkContainer to='/contact' style={{ textDecoration: 'none' }}>
								<Nav.Link>Contact</Nav.Link>
							</LinkContainer>
						</Nav>
						<Form inline>
							<div className='form-group has-search m-2'>
								<span className='fa fa-search form-control-feedback'></span>
								<input
									type='text'
									className='form-control headerInput'
									placeholder='Search'
								/>
							</div>

							{/* <Button variant='outline-success' size='sm'>
							Search
						</Button> */}
						</Form>
						<>
							{userInfo ? (
								<NavDropdown title={`Hello, ${userInfo.name} `} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<>
									<Link to='/login' style={{ textDecoration: 'none' }}>
										<Button
											variant='primary'
											className='button-color m-2'
											size='sm'>
											<i className='fas fa-user'></i> Sign In
										</Button>{' '}
									</Link>

									<Link to='/register' style={{ textDecoration: 'none' }}>
										<Button
											variant='primary'
											className='button-color m-2'
											size='sm'>
											<i className='fas fa-user-plus'></i> Sign up
										</Button>{' '}
									</Link>
								</>
							)}
						</>
						<LinkContainer to='/cart'>
							<Nav.Link>
								{' '}
								<i className='fab fa-opencart fa-2x'>Cart</i>
							</Nav.Link>
						</LinkContainer>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
