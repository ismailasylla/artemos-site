import React from 'react'
import { Helmet } from 'react-helmet'
import Signature from '../Signature'
import NewsLetter from '../NewsLetter'

const About = () => {
	const Font = {
		fontWeight: '400',
		textAlign: 'justify',
	}

	return (
		<>
			<Helmet>
				<title>Artemos | About</title>
				<meta
					name='description'
					content='We are among the top art seller worldwide'></meta>
				<meta name='keywords' content='Arts, Art, Buy Arts'></meta>
			</Helmet>

			<section>
				<img
					style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
					src='https://artemos.net/wp-content/uploads/2020/06/banner-1.jpg'
					alt=''
				/>
			</section>
			<section className='container-fluid'>
				<>
					<div className='row' style={{ padding: '50px' }}>
						<div className='col-sm'>
							<h1 style={(Font, { color: '#8599AC' })}>
								<Signature style={{ width: '150px' }} />
								About{' '}
								<span style={{ fontWeight: '400', color: '#212C51' }}>
									Artemos
								</span>
							</h1>

							<p style={Font}>
								Artemos is a revolutionary, blockchain based Art Tokenization
								platform, a collaboration between Art market professionals:
								Artory blockchain based public registry, Crisantemo fine art
								Services and Alphaseed crowdfunding platform.
							</p>
						</div>
						<div className='col-sm parent mb-5 mr-5'>
							{/* <img
							src='https://artemos.net/wp-content/uploads/2020/06/banner.jpg'
							alt=''
							className='image2'
						/> */}
							<div className='image2'></div>
							<img
								src='https://artemos.net/wp-content/uploads/2020/06/banner.jpg'
								alt=''
								className='image1'
							/>
						</div>
					</div>
				</>
			</section>
			<NewsLetter />
		</>
	)
}

export default About
