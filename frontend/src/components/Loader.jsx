import React from 'react'
import { Spinner, Container } from 'react-bootstrap'
const Loader = () => {
	const SpinnerStyle = {
		// width: '100px',
		// hight: '100px',
		margin: 'auto',
		display: 'block',
	}
	return (
		<Container className='py-5'>
			<Spinner
				animation='border'
				variant='info'
				role='status'
				style={SpinnerStyle}>
				<span className='sr-only'>Loading...</span>{' '}
			</Spinner>
		</Container>
	)
}

export default Loader
