import React from 'react'
import {
	Navbar,
	Nav,
	Container,
	Form,
	NavDropdown,
	Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<Navbar bg='light' expand='lg'>
				<Container>
					<Navbar.Brand className='logo '>
						<Link to='/' style={{ textDecoration: 'none' }}>
							ARTEMOS
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<NavDropdown title='Bye' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Another action
								</NavDropdown.Item>
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
								<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>
									Separated link
								</NavDropdown.Item>
							</NavDropdown>

							<Nav.Link>
								<Link to='/contact' style={{ textDecoration: 'none' }}>
									Contact
								</Link>
							</Nav.Link>
						</Nav>

						<div className='m-2'>
							<Button variant='primary' className='button-color m-2' size='sm'>
								<i className='fas fa-user-plus'></i> Sign up
							</Button>{' '}
							<Button variant='primary' className='button-color m-2' size='sm'>
								<i className='fas fa-user'></i> Log in
							</Button>{' '}
						</div>
						<Form inline>
							<div class='form-group has-search  '>
								<span class='fa fa-search form-control-feedback'></span>
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
						<Nav.Link href='#link'>
							{' '}
							<i className='fas fa-shopping-cart fa-2x'></i>
						</Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
