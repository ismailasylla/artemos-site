import React from 'react'
import { Button } from 'react-bootstrap'
import figure from '../images/figure.png'

const Sold = () => {
	return (
		<>
			<section
				className='bd-highlight'
				style={{
					background:
						'linear-gradient(45deg, rgb(0 0 0) 0%, rgb(78 118 171) 100%)',
				}}>
				<div className='row d-flex justify-content-center '>
					<div className='col-sm-12  parent p-5 mt-5'>
						<span className='features-section2-header'>
							BEST PART OF
							<Button variant='primary' className='button-color' size='bg'>
								<i className=''></i> Sign up
							</Button>
							<img
								src={figure}
								alt=''
								style={{
									width: '20%',
									// height: 'auto',
									float: 'right',
									// marginBottom: '10px',
									position: 'relative',
									marginTop: '-165px',
									marginRight: '80px',
								}}
							/>
						</span>

						<span className='features-section2-header2 '>THE AVANT-GARDE!</span>
					</div>

					{/* <div className='col-sm-2 '>
						<h1>Art</h1>
					</div> */}
				</div>
			</section>
		</>
	)
}

export default Sold
