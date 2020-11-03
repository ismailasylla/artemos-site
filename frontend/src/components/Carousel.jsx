import React from 'react'
import Background1 from '../images/background_image-1.png'
import Background2 from '../images/background_image-2.png'
import Background3 from '../images/background_image-3.png'

const Carousel = () => {
	const slider1 = {
		// display: 'block',
		// height: '400px',
		// minWidth: '100%',
		// width: '100%',
		// maxWidth: '100%',
		// lineHeight: '1',
		// width: '1920px',
		// height: '820px',

		backgroundImage: `url(${Background1})`,
	}
	const slider2 = {
		// width: '100%',
		// height: '800px',
		backgroundImage: `url(${Background2})`,
	}
	const slider3 = {
		// width: '100%',
		// height: '400px',
		backgroundImage: `url(${Background3})`,
	}

	return (
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
						<div className='carousel-caption d-none d-md-block'>
							<h2 className='display-4'>First Slide</h2>
							<p className='lead'>This is a description for the first slide.</p>
						</div>
					</div>

					<div className='carousel-item' style={slider2}>
						<div className='carousel-caption d-none d-md-block'>
							<h2 className='display-4'>Second Slide</h2>
							<p className='lead'>
								This is a description for the second slide.
							</p>
						</div>
					</div>

					<div className='carousel-item' style={slider3}>
						<div className='carousel-caption d-none d-md-block'>
							<h2 className='display-4'>Third Slide</h2>
							<p className='lead'>This is a description for the third slide.</p>
						</div>
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
	)
}

export default Carousel
