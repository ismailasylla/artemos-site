import React from 'react'
import Signature from '../Signature'

const About = () => {
	const Font = {
		fontWeight: '400',
		textAlign: 'justify',
	}

	return (
		<>
			<section>
				<img
					style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
					src='https://artemos.net/wp-content/uploads/2020/06/banner-1.jpg'
					alt=''
				/>
			</section>
			<section className='container-fluid'>
				<>
					<div className='row' style={{ padding: '50px' }}>
						<div className='col-sm'>
							<h1 style={(Font, { color: '#8599AC' })}>
								<Signature style={{ width: '150px' }} />
								About{' '}
								<span style={{ fontWeight: '400', color: '#212C51' }}>
									Artemos
								</span>
							</h1>

							<p style={Font}>
								Artemos is a revolutionary, blockchain based Art Tokenization
								platform, a collaboration between Art market professionals:
								Artory blockchain based public registry, Crisantemo fine art
								Services and Alphaseed crowdfunding platform.
							</p>
						</div>
						<div className='col-sm parent mb-5 mr-5'>
							{/* <img
							src='https://artemos.net/wp-content/uploads/2020/06/banner.jpg'
							alt=''
							className='image2'
						/> */}
							<div className='image2'></div>
							<img
								src='https://artemos.net/wp-content/uploads/2020/06/banner.jpg'
								alt=''
								className='image1'
							/>
						</div>
					</div>
				</>
			</section>
			<section
				className='container-fluid section-3 '
				style={{ marginBottom: '500px' }}>
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
						<div className='col-sm'>
							<div class='subscription-wrapper'>
								<div class='d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left'>
									{/* <h3 class="flex-fill">Subscribe <br> to our newsletter</h3> */}
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
												class='btn btn-primary btn-md border-0 w-100'>
												Subscribe Now
											</button>{' '}
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</>
			</section>
		</>
	)
}

export default About
