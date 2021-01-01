import React from 'react'
import { Button, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Logo from '../images/logo/logo.png'

const Footer = () => {
	return (
		<>
			<footer className='text-gray-700 body-font'>
				<div className='footer' id='footer'>
					<div className='container-fluid '>
						<div className='row '>
							<div className='col-lg-2  col-md-2 col-sm-4 col-xs-6 container-fluid'>
								<h6> ONLINE </h6>
								<ul>
									<li>
										{' '}
										<a href={'/'}> Buy </a>{' '}
									</li>
									<li>
										{' '}
										<a href={'/'}> Sell </a>{' '}
									</li>
									<li>
										{' '}
										<a href={'/'}> List </a>{' '}
									</li>
									<li>
										{' '}
										<a href={'/'}> Auction </a>{' '}
									</li>
								</ul>
							</div>
							<div className='col-lg-2  col-md-2 col-sm-4 col-xs-6'>
								<h6> About & Services </h6>
								<ul>
									<li>
										{' '}
										<a href={'/'}> Fine Art </a>{' '}
									</li>
									<li>
										{' '}
										<a href={'/'}> Collectible</a>{' '}
									</li>
									<li>
										{' '}
										<a href={'/'}> Wealth </a>{' '}
									</li>
									<li>
										{' '}
										{/* <a href={'/'}> Tokenization</a>{' '} */}
										<LinkContainer
											to='/tokenize'
											style={{ textDecoration: 'none' }}>
											<NavDropdown.Item>Tokenization</NavDropdown.Item>
										</LinkContainer>
									</li>
									<li>
										{' '}
										{/* <a href={'/'}> Tokenization</a>{' '} */}
										<LinkContainer
											to='/about'
											style={{ textDecoration: 'none' }}>
											<NavDropdown.Item>Who We Are</NavDropdown.Item>
										</LinkContainer>
									</li>
								</ul>
							</div>
							<div className='col-lg-2  col-md-2 col-sm-4 col-xs-6'>
								<h6> FOR INVESTORS </h6>
								<ul>
									<li>
										{' '}
										<a href={'/'}> Invest</a>{' '}
									</li>
									<li>
										{' '}
										{/* <a href={'/'}>Tokenize </a>{' '} */}
										<LinkContainer
											to='/tokenize'
											style={{ textDecoration: 'none' }}>
											<NavDropdown.Item>Tokenize</NavDropdown.Item>
										</LinkContainer>
									</li>
									<li>
										{' '}
										<a href={'/'}> Why to Invest</a>{' '}
									</li>
									<li>
										{' '}
										<a href={'/'}> Risks</a>{' '}
									</li>
								</ul>
							</div>
							<div className='col-lg-2  col-md-2 col-sm-4 col-xs-6'>
								<h6> Office </h6>
								<ul>
									<li>
										{' '}
										<a href={'/'}> The address will be added here, UAE</a>{' '}
									</li>
									<li>
										{' '}
										<a href={'/'}> +971 00 000 0000</a>{' '}
									</li>
									<li>
										{' '}
										<a href={'/'}> PO BOX 0000 </a>{' '}
									</li>
								</ul>
								{/* payments*/}
								<ul className='nav nav-pills payments '>
									<li
										style={{
											fontSize: '3em',
											color: 'rgb(23, 34, 116)',
										}}>
										<i className='fab fa-cc-visa '></i>
									</li>
									<li
										style={{
											fontSize: '3em',
											color: '#f7981b',
										}}>
										<i className='fab fa-cc-mastercard'></i>
									</li>
									<li
										style={{
											fontSize: '3em',
											color: 'rgb(108, 196, 238)',
										}}>
										<i className='fab fa-cc-amex'></i>
									</li>
									<li
										style={{
											fontSize: '3em',
											color: 'rgb(37, 59, 128)',
										}}>
										<i className='fab fa-cc-paypal'></i>
									</li>
								</ul>
								<ul className='social'>
									<li>
										{' '}
										<a href={'/'}>
											{' '}
											<i className='fab fa-facebook-f'></i>
										</a>{' '}
									</li>
									<li>
										{' '}
										<a href={'/'}>
											{' '}
											<i className='fab fa-twitter'></i>
										</a>{' '}
									</li>
									<li>
										{' '}
										<a href={'/'}>
											{' '}
											<i className='fab fa-linkedin'></i>
										</a>{' '}
									</li>
									{/* <li>
									{' '}
									<a href={'/'}>
										{' '}
										<i className='fab fa-pinterest'></i>
									</a>{' '}
								</li> */}
									<li>
										{' '}
										<a href={'/'}>
											{' '}
											<i className='fab fa-youtube'></i>
										</a>{' '}
									</li>
								</ul>
							</div>
							<div className='col-lg-3  col-md-3 col-sm-6 col-xs-12 '>
								<h6> Subscribe to our Newsletter </h6>
								<ul>
									<li>
										<div className='input-append newsletter-box text-center'>
											<div className='form-group row'>
												<div className='col-sm-10'>
													<form>
														<div className='form-group'>
															<label
																htmlFor='exampleInputEmail1'
																className='mr-5'>
																Email address
															</label>
															<input
																type='email'
																className='form-control ml-5 footerInput'
																id='exampleInputEmail1'
																aria-describedby='emailHelp'
																placeholder='Email'
															/>
															<Button
																style={{ width: '53%', float: 'left' }}
																variant='primary'
																className='button-color m-2 ml-5  cardbtn'
																size='sm'>
																<i className=''></i> Subscribe
															</Button>{' '}
														</div>
													</form>
												</div>
											</div>
										</div>
									</li>
								</ul>

								{/* nav nav-pills payments */}
							</div>
						</div>
					</div>
				</div>

				<div className=' container-fluid footer-bottom'>
					<h1 style={{ float: 'left' }} className='ml-5 mt-3 logo'>
						<img src={Logo} alt='' style={{ width: '144px' }} />
					</h1>
					<div className='container'>
						<p className='text-center mt-3'>
							{' '}
							Copyright © artemos 2020. All right reserved.{' '}
						</p>
					</div>
				</div>
				<div className='container-fluid footer-bottom'>
					<div className='container'>
						{' '}
						<ul
							className='text-center mt-3 d-flex justify-content-center'
							id='terms'>
							<li>
								<a href='/'>Privacy Policy </a>
							</li>

							<li>
								<a href='/'>Terms & Conditions</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
