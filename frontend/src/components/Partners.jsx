import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Signature from './Signature'

const Partners = () => {
	return (
		<>
			<div>
				<Container>
					<Row>
						<Col className='text-center py-3 '>
							<div className='container d-flex justify-content-center'>
								<Signature
									style={{ width: '150px' }}
									className='d-flex justify-content-center'
								/>
							</div>
							<h1
								className='featuredItems'
								style={{ marginBottom: '-20px', marginTop: '-60px' }}>
								Our Partners
							</h1>

							<div className='container d-flex justify-content-center'>
								<hr className='black-line' />
								<hr className='red-line' />
								<hr className='green-line' />
							</div>
						</Col>
					</Row>
				</Container>
				{/* <div class='container text-center my-3'>
				<div
					id='recipeCarousel'
					class='carousel slide w-100'
					data-ride='carousel'>
					<div class='carousel-inner w-100' role='listbox'>
						<div class='carousel-item row no-gutters active'>
							<div class='col-3 float-left'>
								<img
									class='img-fluid'
									src='https://previews.123rf.com/images/yupiramos/yupiramos1308/yupiramos130801288/21678884-gluten-free-seal-over-white-background.jpg'
								/>
							</div>
							<div class='col-3 float-left'>
								<img
									class='img-fluid'
									src='https://previews.123rf.com/images/yupiramos/yupiramos1308/yupiramos130801288/21678884-gluten-free-seal-over-white-background.jpg'
								/>
							</div>
							<div class='col-3 float-left'>
								<img
									class='img-fluid'
									src='https://previews.123rf.com/images/yupiramos/yupiramos1308/yupiramos130801288/21678884-gluten-free-seal-over-white-background.jpg'
								/>
							</div>
							<div class='col-3 float-left'>
								<img
									class='img-fluid'
									src='https://previews.123rf.com/images/yupiramos/yupiramos1308/yupiramos130801288/21678884-gluten-free-seal-over-white-background.jpg'
								/>
							</div>
						</div>
						<div class='carousel-item row no-gutters'>
							<div class='col-3 float-left'>
								<img
									class='img-fluid'
									src='https://previews.123rf.com/images/yupiramos/yupiramos1308/yupiramos130801288/21678884-gluten-free-seal-over-white-background.jpg'
								/>
							</div>
							<div class='col-3 float-left'>
								<img
									class='img-fluid'
									src='https://previews.123rf.com/images/yupiramos/yupiramos1308/yupiramos130801288/21678884-gluten-free-seal-over-white-background.jpg'
								/>
							</div>
							<div class='col-3 float-left'>
								<img
									class='img-fluid'
									src='https://previews.123rf.com/images/yupiramos/yupiramos1308/yupiramos130801288/21678884-gluten-free-seal-over-white-background.jpg'
								/>
							</div>
							<div class='col-3 float-left'>
								<img
									class='img-fluid'
									src='https://previews.123rf.com/images/yupiramos/yupiramos1308/yupiramos130801288/21678884-gluten-free-seal-over-white-background.jpg'
								/>
							</div>
						</div>
					</div>
					<a
						class='carousel-control-prev'
						href='#recipeCarousel'
						role='button'
						data-slide='prev'>
						<span class='carousel-control-prev-icon' aria-hidden='true'></span>
						<span class='sr-only'>Previous</span>
					</a>
					<a
						class='carousel-control-next'
						href='#recipeCarousel'
						role='button'
						data-slide='next'>
						<span class='carousel-control-next-icon' aria-hidden='true'></span>
						<span class='sr-only'>Next</span>
					</a>
				</div>
			</div> */}
				<div
					class='gallery js-flickity'
					data-flickity-options='{ "wrapAround": true }'>
					<div className='gallery-cell'></div>
					<div className='gallery-cell'></div>
					<div className='gallery-cell'></div>
					<div className='gallery-cell'></div>
					<div className='gallery-cell'></div>
				</div>
			</div>
		</>
	)
}

export default Partners
