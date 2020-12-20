import React from 'react'
import Background1 from '../../images/background_image-1.png'
import Background2 from '../../images/background_image-2.png'
import Background3 from '../../images/background_image-3.png'
import Partners from '../Partners'
import Sold from '../Sold'
import Products from '../products/Products'

const Home = ({ match }) => {
	const keyword = match.params.keyword
	const slider1 = {
		backgroundSize: 'cover',

		backgroundImage: `url(${Background1})`,
	}
	const slider2 = {
		backgroundSize: 'cover',
		backgroundImage: `url(${Background2})`,
	}
	const slider3 = {
		backgroundSize: 'cover',
		backgroundImage: `url(${Background3})`,
	}

	return (
		<>
			<div>
				<div
					id='carouselExampleIndicators'
					className='carousel slide'
					data-ride='carousel'>
					<ol className='carousel-indicators'>
						<li
							data-target='#carouselExampleIndicators'
							data-slide-to='0'
							className='active'></li>
						<li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
						<li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
					</ol>
					<div className='carousel-inner' role='listbox'>
						<div className='carousel-item active' style={slider1}>
							{/* <div
							className='carousel-caption d-none d-md-block col-sm-6 col-md-6 col-lg-3'
							style={{ float: 'left', marginBottom: '110px' }}>
							<h6 className='display-4 carous-header mb-5'>
								LIVE THE DIGITAL ERA.
							</h6>
							<p className='lead slider-lead '>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat, sed diam voluptua. At vero eos et accusam et
								justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
								takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
								dolor sit amet.
							</p>
						</div> */}
						</div>
						<div className='carousel-item' style={slider2}>
							<div className='carousel-caption d-none d-md-block'>
								{/* <h2 className='display-4'>Second Slide</h2>
							<p className='lead'>
								This is a description for the second slide.
							</p> */}
								{/* <div className='card-columns '>
								<div className='card'>
									<svg
										className='bd-placeholder-img card-img-top slidercard '
										width='100%'
										height='260'
										// xmlns='http://www.w3.org/2000/svg'
										aria-label='Placeholder: Image cap'
										preserveAspectRatio='xMidYMid slice'
										role='img'>
										<title>Placeholder</title>
										<rect width='100%' height='100%' fill='#868e96' />
										<text x='10%' y='50%' fill='#dee2e6' dy='.3em'>
											Image cap
										</text>
									</svg>

									<div className='card-body' style={{ padding: '1px' }}>
										<h5 className='card-title'>
											Card title that wraps to a new line
										</h5>
										<Button
											variant='primary'
											className='button-color m-2 float-left cardbtn'
											size='sm'>
											<i className=''></i> Learn More
										</Button>{' '}
									</div>
								</div>
							</div> */}

								{/* <div className='card-group'>
								<div className='col-sm-6 col-md-6 col-lg-3 py-3'>
									<div
										className='card border-primary mb-3'
										style={{ maxWidth: '20rem' }}>
										<div className='card-body cardimage'>
											<h6 className='card-title'>MASSACRE</h6>
											<h6 className='card-title'>OF THE INNOCENT</h6>
											<hr className='light-line' /> <br />
											<br />
											<p className='card-text'>Peter Paul Ruben, 1610.</p>
										</div>

										<div class='card-header'>
											<Button
												variant='primary'
												className='button-color m-2 float-left cardbtn'
												size='sm'>
												<i className=''></i> Learn More
											</Button>{' '}
											<p className='card-footer-text'>$76.7 MILLION</p>
										</div>
									</div>
								</div>
							</div> */}
							</div>
						</div>
						<div className='carousel-item' style={slider3}>
							{/* <div className='carousel-caption d-none d-md-block'>
							<h2 className='display-4'>Third Slide</h2>
							<p className='lead'>This is a description for the third slide.</p>
						</div> */}
						</div>
					</div>
					<a
						className='carousel-control-prev'
						href='#carouselExampleIndicators'
						role='button'
						data-slide='prev'>
						<span
							className='carousel-control-prev-icon'
							aria-hidden='true'></span>
						<span className='sr-only'>Previous</span>
					</a>
					<a
						className='carousel-control-next'
						href='#carouselExampleIndicators'
						role='button'
						data-slide='next'>
						<span
							className='carousel-control-next-icon'
							aria-hidden='true'></span>
						<span className='sr-only'>Next</span>
					</a>
				</div>
			</div>
			<Products keyword={keyword} />
			{/* <FeaturedItems /> */}
			<Sold />
			<Partners />
		</>
	)
}

export default Home
