import React from 'react'
import Background1 from '../../images/background_image-1.png'
import Background2 from '../../images/background_image-2.png'
import Background3 from '../../images/background_image-3.png'
import { Row, Col } from 'react-bootstrap'
import Partners from '../Partners'
// import Sold from '../Sold'
import Products from '../products/Products'
import NewsLetter from '../NewsLetter'

const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword
	const pageNumber = match.params.pageNumber || 1

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
						<div className='carousel-item active' style={slider1}></div>
						<div className='carousel-item' style={slider2}>
							<div className='carousel-caption d-none d-md-block'></div>
						</div>
						<div className='carousel-item' style={slider3}></div>
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
			<Row>
				<Col className='text-center py-5 '>
					<h1 className='featuredItems'>Arts</h1>
					<div className='container d-flex justify-content-center'>
						<hr className='black-line' />
						<hr className='red-line' />
						<hr className='green-line' />
					</div>
				</Col>
			</Row>
			<Products keyword={keyword} pageNumber={pageNumber} />

			{/* <FeaturedItems /> */}
			{/* <Sold /> */}
			<NewsLetter />
			<Partners />
		</>
	)
}

export default HomeScreen
