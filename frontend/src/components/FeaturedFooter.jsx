import React from 'react'
import { Button } from 'react-bootstrap'
import figure from '../images/figure.png'

const Sold = () => {
	return (
		<>
			<div className='header-featured-section2'>
				<div class='d-flex bd-highlight'>
					<div class='p-2 flex-fill bd-highlight'>
						<h1 className='features-section2-header'>
							BEST PART OF{' '}
							<span>
								<Button variant='primary' className='button-color' size='bg'>
									<i className=''></i> Sign up
									{/* <div className='container' style={{ float: 'right' }}>
								
							</div> */}
								</Button>{' '}
							</span>{' '}
							<br />{' '}
							<span className='features-section2-header2  '>
								THE AVANT-GARDE!
							</span>{' '}
						</h1>
					</div>

					{/* <div class='p-2 flex-fill bd-highlight'>
						<img src={figure} alt='' />
					</div> */}
					{/* <div class='p-2 flex-fill bd-highlight'></div> */}
				</div>
				<div className='container'>
					<img
						src={figure}
						alt=''
						style={{
							width: '20%',
							height: 'auto',
							float: 'right',
							marginBottom: '10px',
							position: 'relative',
							marginTop: '-414px',
							marginRight: '-48px',
						}}
					/>
				</div>
			</div>
		</>
	)
}

export default Sold
