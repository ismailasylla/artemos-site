import React from 'react'
import Signature from './Signature'
import { Button } from 'react-bootstrap'

const NewsLetter = () => {
	const Font = {
		fontWeight: '400',
		textAlign: 'justify',
	}
	return (
		<div>
			<section
				className='container-fluid section-3 '
				style={{ marginBottom: '0px' }}>
				<>
					<div className='row' style={{ padding: '50px' }}>
						<div className='col-sm'>
							<h1 style={(Font, { color: '#8599AC' })}>
								<Signature style={{ width: '150px' }} />
								<h2 class='elementor-heading-title elementor-size-default section-3-h2'>
									Join our mailing list to receive updates from ARTEMOS
								</h2>{' '}
							</h1>
						</div>
						{/* <div className='col-sm'>
							<div class='subscription-wrapper'>
								<div class='d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left'>
									<form action='#' class='row flex-fill'>
										<div class='col-lg-7 my-md-2 my-2'>
											{' '}
											<input
												type='email'
												class='form-control px-4 border-0 w-100 text-center text-md-left'
												id='email'
												placeholder='Your Email'
												name='email'
											/>{' '}
										</div>
										<div class='col-lg-5 my-md-2 my-2'>
											{' '}
											<button
												type='submit'
												className='btn btn-primary btn-md border-0 w-100 ml-2'>
												Subscribe Now
											</button>{' '}
										</div>
									</form>
								</div>
							</div>
						</div> */}
					</div>
				</>
			</section>
			<section className='tokenize-bg'>
				<div className='container  d-flex justify-content-center p-5'>
					<a href='https://meetings.hubspot.com/hello2226'>
						<Button
							type='submit'
							variant='primary'
							className='button-color m-2 '>
							BOOK A FREE CONSULTATION{' '}
							<i className='fas fa-angle-double-right ml-2'></i>
						</Button>{' '}
					</a>
				</div>
			</section>
		</div>
	)
}

export default NewsLetter
