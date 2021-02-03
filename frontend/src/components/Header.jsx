/** @format */

import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	Navbar,
	Nav,
	Container,
	Form,
	NavDropdown,
	Button,
	Image,
} from 'react-bootstrap'
import { logout } from '../actions/userActions'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Logo from '../images/logo/logo.png'
import SearchBox from '../components/SearchBox'

const Header = () => {
	const dispatch = useDispatch()
	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const cart = useSelector((state) => state.cart)

	const { cartItems } = cart

	const logoutHandler = () => {
		dispatch(logout())
	}
	return (
		<header>
			<Navbar bg='light' expand='lg' id='navbar_top'>
				<LinkContainer
					to='/'
					style={{ textDecoration: 'none' }}
					data-toggle='collapse'
					data-target='.navbar-collapse.show'>
					<Navbar.Brand className='logo '>
						<img src={Logo} alt='' style={{ width: '144px' }} />
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<NavDropdown title='Buy' id='basic-nav-dropdown'>
							<LinkContainer
								to='/products'
								style={{ textDecoration: 'none' }}
								data-toggle='collapse'
								data-target='.navbar-collapse.show'>
								<NavDropdown.Item>Arts</NavDropdown.Item>
							</LinkContainer>

							<NavDropdown.Divider />
							<NavDropdown.Item
								href='#'
								data-toggle='collapse'
								data-target='.navbar-collapse.show'>
								Separated link
							</NavDropdown.Item>
						</NavDropdown>

						{/* <Nav.Link href='#link'>Sell</Nav.Link> */}
						<NavDropdown title='Services' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Fine Art</NavDropdown.Item>
							<NavDropdown.Item
								href='#action/3.2'
								data-toggle='collapse'
								data-target='.navbar-collapse.show'>
								Collectible
							</NavDropdown.Item>

							<NavDropdown.Item href='#action/3.3'>Wealth</NavDropdown.Item>
							<NavDropdown.Divider />
							<LinkContainer
								to='/tokenize'
								style={{ textDecoration: 'none' }}
								data-toggle='collapse'
								data-target='.navbar-collapse.show'>
								<NavDropdown.Item>Tokenize</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
						<NavDropdown title='More' id='basic-nav-dropdown'>
							<LinkContainer
								to='/about'
								style={{ textDecoration: 'none' }}
								data-toggle='collapse'>
								<NavDropdown.Item href='#action/3.1'>
									Who We Are{' '}
								</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer
								to='/contact'
								style={{ textDecoration: 'none' }}
								data-toggle='collapse'
								data-target='.navbar-collapse.show'>
								<NavDropdown.Item href='#action/3.2'>Contact</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
					</Nav>

					<Route render={({ history }) => <SearchBox history={history} />} />
					<>
						{userInfo ? (
							<>
								<img
									src='https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'
									alt=''
									className='rounded-circle ml-1'
									style={{ width: '40px' }}
								/>
								<NavDropdown title={`Hello, ${userInfo.name} `} id='username'>
									<LinkContainer
										to='/profile'
										data-toggle='collapse'
										data-target='.navbar-collapse.show'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item
										onClick={logoutHandler}
										data-toggle='collapse'
										data-target='.navbar-collapse.show'>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							</>
						) : (
							<>
								<Link
									to='/login'
									style={{ textDecoration: 'none' }}
									data-toggle='collapse'
									data-target='.navbar-collapse.show'>
									<Button
										variant='primary'
										className='button-color m-2'
										size='sm'>
										<i className='fas fa-user'></i> Sign In
									</Button>{' '}
								</Link>

								<Link
									to='/register'
									style={{ textDecoration: 'none' }}
									data-toggle='collapse'
									data-target='.navbar-collapse.show'>
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
					{userInfo && userInfo.isAdmin && (
						<>
							<img
								src='https://icon-library.com/images/art-icon-png/art-icon-png-9.jpg'
								alt=''
								className='rounded-circle'
								style={{ width: '40px' }}
							/>
							<NavDropdown title='Admin' id='adminmenu'>
								<LinkContainer
									to='/profile'
									data-toggle='collapse'
									data-target='.navbar-collapse.show'>
									<NavDropdown.Item>Profile</NavDropdown.Item>
								</LinkContainer>

								<LinkContainer
									to='/admin/userlist'
									data-toggle='collapse'
									data-target='.navbar-collapse.show'>
									<NavDropdown.Item>Users</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer
									to='/admin/productlist'
									data-toggle='collapse'
									data-target='.navbar-collapse.show'>
									<NavDropdown.Item>Products</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer
									to='/admin/orderlist'
									data-toggle='collapse'
									data-target='.navbar-collapse.show'>
									<NavDropdown.Item>Orders</NavDropdown.Item>
								</LinkContainer>
								<NavDropdown.Item onClick={logoutHandler}>
									Logout
								</NavDropdown.Item>
							</NavDropdown>
						</>
					)}
					<LinkContainer
						to='/cart'
						className='mr-5'
						data-toggle='collapse'
						data-target='.navbar-collapse.show'>
						<Nav.Link>
							{' '}
							<span className='badge badge-pill badge-danger larger-badge mr-2'>
								{cartItems.reduce((acc, item) => acc + item.qty, 0)}{' '}
							</span>
							<i className='fab fa-opencart fa-2x'></i>
							Cart
						</Nav.Link>
					</LinkContainer>
				</Navbar.Collapse>
			</Navbar>
		</header>
	)
}

export default Header
