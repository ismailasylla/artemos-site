import React from 'react'
import { Button } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer className='text-gray-700 body-font'>
			{/* <Container>
				<Row>
					<Col className='text-center py-3'>Copyright &copy; Artemos</Col>
                </Row>
                
			</Container> */}

			<div className='footer' id='footer'>
				<div className='container-fluid ml-5 mr-5'>
					<div className='row'>
						<div className='col-lg-2  col-md-2 col-sm-4 col-xs-6'>
							<h6> Buy </h6>
							<ul>
								<li>
									{' '}
									<a href='#'> Lorem Ipsum </a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'> Lorem Ipsum </a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'> Lorem Ipsum </a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'> Lorem Ipsum </a>{' '}
								</li>
							</ul>
						</div>
						<div className='col-lg-2  col-md-2 col-sm-4 col-xs-6'>
							<h6> Services </h6>
							<ul>
								<li>
									{' '}
									<a href='#'> Fine Art </a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'> Collectible</a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'> Wealth </a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'> Tokenization</a>{' '}
								</li>
							</ul>
						</div>
						<div className='col-lg-2  col-md-2 col-sm-4 col-xs-6'>
							<h6> Social Media Platforms </h6>
							<ul>
								<li>
									{' '}
									<a href='#'> Lorem Ipsum </a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'> Lorem Ipsum </a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'> Lorem Ipsum </a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'> Lorem Ipsum </a>{' '}
								</li>
							</ul>
						</div>
						<div className='col-lg-2  col-md-2 col-sm-4 col-xs-6'>
							<h6> Office </h6>
							<ul>
								<li>
									{' '}
									<a href='#'> The address will be added here, UAE</a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'> +971 00 000 0000</a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'> PO BOX 0000 </a>{' '}
								</li>
							</ul>
						</div>
						<div className='col-lg-3  col-md-3 col-sm-6 col-xs-12 '>
							<h6> Subscribe to our Newsletter </h6>
							<ul>
								<li>
									<div className='input-append newsletter-box text-center'>
										{/* <input
											type='text'
											className='full text-center'
											placeholder='Email '
										/> */}
										<div className='form-group row'>
											<div className='col-sm-10'>
												<form>
													<div className='form-group'>
														<label for='exampleInputEmail1'>
															Email address
														</label>
														<input
															type='email'
															className='form-control ml-5'
															id='exampleInputEmail1'
															aria-describedby='emailHelp'
														/>
														<small
															id='emailHelp'
															className='form-text text-muted'>
															We'll never share your email with anyone else.
														</small>
													</div>
													{/* <button type='submit' className='btn btn-success'>
														Submit
													</button> */}
													<Button
														variant='primary'
														className='button-color m-2 ml-5 float-left cardbtn'
														size='sm'>
														<i className=''></i> Subscribe
													</Button>{' '}
												</form>
											</div>
										</div>
									</div>
								</li>
							</ul>
							<ul className='social'>
								<li>
									{' '}
									<a href='#'>
										{' '}
										<i className=' fa fa-facebook'> </i>{' '}
									</a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'>
										{' '}
										<i className='fa fa-twitter'> </i>{' '}
									</a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'>
										{' '}
										<i className='fa fa-google-plus'> </i>{' '}
									</a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'>
										{' '}
										<i className='fa fa-pinterest'> </i>{' '}
									</a>{' '}
								</li>
								<li>
									{' '}
									<a href='#'>
										{' '}
										<i className='fa fa-youtube'> </i>{' '}
									</a>{' '}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className=' container-fluid footer-bottom'>
				<h1 style={{ float: 'left' }} className='ml-5 mt-3'>
					Artemos
				</h1>
				<div className='container'>
					<p className='text-center mt-3'>
						{' '}
						Copyright © artemos 2020. All right reserved.{' '}
					</p>
					<div className='pull-right'>
						<ul className='nav nav-pills payments'>
							<li>
								<i className='fa fa-cc-visa'></i>
							</li>
							<li>
								<i className='fa fa-cc-mastercard'></i>
							</li>
							<li>
								<i className='fa fa-cc-amex'></i>
							</li>
							<li>
								<i className='fa fa-cc-paypal'></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
