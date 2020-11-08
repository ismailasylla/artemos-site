import React from 'react'
import { Button } from 'react-bootstrap'

const Sold = () => {
	return (
		<div className='sold-footer '>
			<h1 className='sold-footer-header1'>
				BE A SELLER{' '}
				<span>
					<Button
						variant='primary'
						className='button-color m-2'
						size='bg'
						style={{ border: '2px solid #f7fafc', borderRadius: ' 50px 20px' }}>
						<i className=''></i> Sign up
					</Button>{' '}
				</span>
			</h1>
			<p className='sold-footer-header2'>OF A NEW ARA! </p>
		</div>
	)
}

export default Sold
