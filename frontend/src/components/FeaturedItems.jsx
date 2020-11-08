import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FeaturedFooter from './FeaturedFooter'

const FeaturedItems = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col className='text-center py-3 '>
						<h1 className='featuredItems'>Featured Items</h1>
						<div className='container d-flex justify-content-center'>
							<hr className='black-line' />
							<hr className='red-line' />
							<hr className='green-line' />
						</div>
					</Col>
				</Row>
			</Container>
			{/* // Featured items footer */}
			<FeaturedFooter />
		</div>
	)
}

export default FeaturedItems
