import React from 'react'
import { Button } from 'react-bootstrap'
import background from '../images/black-art.jpg'

const Sold = () => {
	const wrap = {
		display: 'flex',
		backgroundImage: `url(${background})`,
		height: '700px',
		opacity: '1',
		letterSpacing: '3.2px',
	}
	return (
		<>
			<div
				className='d-flex justify-content-around align-items-center '
				style={wrap}>
				<h1 className='p-2 ' style={{ color: 'white' }}>
					Collectible wealth
				</h1>
				<h1 className='p-2 ' style={{ color: 'white' }}>
					TOKENIZATION
				</h1>
				<h1 className='p-2 ' style={{ color: 'white' }}>
					FINE ART
				</h1>
			</div>
			<div className='sold-footer '>
				<h1 className='sold-footer-header1'>
					BE A SELLER{' '}
					<span>
						<Button
							variant='primary'
							className='button-color m-2'
							size='bg'
							style={{
								border: '2px solid #f7fafc',
								borderRadius: ' 50px 20px',
							}}>
							<i className=''></i> Sign up
						</Button>{' '}
					</span>
				</h1>
				<p className='sold-footer-header2'>OF A NEW ARA! </p>
			</div>
		</>
	)
}

export default Sold
