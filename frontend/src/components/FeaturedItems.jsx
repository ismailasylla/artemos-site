import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import '../components/featured.css'

const FeaturedItems = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						<h1 className='featuredItems'>Featured Items</h1>
						<hr className='black-line' />
						<hr className='red-line' />
						<hr className='green-line' />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default FeaturedItems
