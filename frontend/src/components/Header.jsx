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
				<LinkContainer to='/' style={{ textDecoration: 'none' }}>
					<Navbar.Brand className='logo '>
						<img src={Logo} alt='' style={{ width: '144px' }} />
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<NavDropdown title='Buy' id='basic-nav-dropdown'>
							<LinkContainer to='/products' style={{ textDecoration: 'none' }}>
								<NavDropdown.Item>Arts</NavDropdown.Item>
							</LinkContainer>

							<NavDropdown.Item href='/Watches'>Watches</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
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
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							</>
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
					{userInfo && userInfo.isAdmin && (
						<>
							<img
								src='https://icon-library.com/images/art-icon-png/art-icon-png-9.jpg'
								alt=''
								className='rounded-circle'
								style={{ width: '40px' }}
							/>
							<NavDropdown title='Admin' id='adminmenu'>
								<LinkContainer to='/profile'>
									<NavDropdown.Item>Profile</NavDropdown.Item>
								</LinkContainer>

								<LinkContainer to='/admin/userlist'>
									<NavDropdown.Item>Users</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/productlist'>
									<NavDropdown.Item>Products</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/admin/orderlist'>
									<NavDropdown.Item>Orders</NavDropdown.Item>
								</LinkContainer>
								<NavDropdown.Item onClick={logoutHandler}>
									Logout
								</NavDropdown.Item>
							</NavDropdown>
						</>
					)}
					<LinkContainer to='/cart' className='mr-5'>
						<Nav.Link>
							{' '}
							<span className='badge badge-pill badge-danger larger-badge mr-2'>
								{cartItems.reduce((acc, item) => acc + item.qty, 0)}{' '}
							</span>
							{/* <i className='fab fa-opencart fa-2x'></i> */}
							Cart <i className='fas fa-cart-arrow-down fa-2x'></i>
						</Nav.Link>
					</LinkContainer>
				</Navbar.Collapse>
			</Navbar>
		</header>
	)
}

export default Header
