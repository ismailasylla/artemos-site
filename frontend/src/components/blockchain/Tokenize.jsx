import React from 'react'
import { Helmet } from 'react-helmet'
import Signature from '../Signature'
import { Button } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
// import NewsLetter from '../NewsLetter'

const Tokenize = () => {
	const Font = {
		fontWeight: '400',
		textAlign: 'justify',
	}
	const HeadingColor = {
		color: '#212c51',
	}

	return (
		<>
			<Helmet>
				<title>Artemos | Tokenize</title>
				<meta name='description' content='ART - TOKENIZATION'></meta>
				<meta
					name='keywords'
					content='Arts, Art, Buy Arts Artemos alphaseed technology'></meta>
			</Helmet>
			<section>
				<img
					style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
					src='https://artemos.net/wp-content/uploads/2020/06/banner.jpg'
					alt=''
				/>
			</section>
			<section className='container-fluid'>
				<>
					<Row>
						<Col className='text-center '>
							<h2
								className='d-flex justify-content-center p-5'
								id='tokenize-section-2-h2'
								style={(HeadingColor, { marginBottom: '-50px' })}>
								Asset Tokenization
							</h2>
							<div className='container d-flex justify-content-center'>
								<hr className='black-line' />
								<hr className='red-line' />
								<hr className='green-line' />
							</div>
						</Col>
					</Row>
					<div className='row' style={{ padding: '50px' }}>
						<div className='col-sm'>
							<h2 style={(Font, { color: '#8599AC' })}>
								<Signature style={{ width: '150px' }} />
								Tokenize{' '}
								<span style={{ fontWeight: '00', color: '#212C51' }}>
									- All Your Real World Assets
								</span>
							</h2>

							<p style={(Font, { textAlign: 'justify' })}>
								Tokenization of Things is the buzzword at the moment around the
								blockchain. Large conglomerates and financial giants have
								started to move into Tokenized Asset Offerings(TAO) and offering
								Tokenization as a Service(TaaS). The cryptocurrency market has
								evolved itself from Bitcoin to STOs and now to TAOs. The
								expansion of cryptos into the asset tokenization is a natural
								progression since it allows traditional real estate, art
								galleries and illiquid asset classes to move into blockchain.
								Asset tokenization refers to the process of converting the
								ownership of real-world assets into multiple digital tokens. Be
								it venture capital funds, equity shares, Fine Art, real estate,
								precious Collective , diamond, etc. it is possible to tokenize
								any asset. The tokens are backed by blockchain technology that
								records every transaction on the platform to secure the user and
								the asset information comprehensively. This technology enables
								more efficiency and security for the investors and brings in
								zestful opportunities for new participants. Hybrid Integration
								Solution Ltd will offer an all-inclusive asset tokenization
								platform with avant-garde blockchain technology,
								functionalities, and features that will ensure a seamless
								business experience for the customers.
							</p>
							<b>
								<strong style={{ fontWeight: 'bolder', textAlign: 'justify' }}>
									Tokenized Asset Offering paves way for a financial markets to
									move into blockchain through automated KYC/AML, investor
									verification and a fully transparent voting rights.
								</strong>
							</b>
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
			<section>
				<div className='container' style={{ padding: '50px' }}>
					<h2
						className='d-flex justify-content-center p-5'
						id='tokenize-section-2-h2'
						style={(HeadingColor, { marginBottom: '-50px' })}>
						Asset Tokenization Platform
					</h2>
					<div className='container d-flex justify-content-center'>
						<hr className='black-line' />
						<hr className='red-line' />
						<hr className='green-line' />
					</div>
					<p style={(Font, { textAlign: 'justify' })}>
						A customized end-to-end tokenized assets issuance platform for
						issuers and their specific target industry includes specific art
						service starting with provenance registrations and archiving using
						blockchain and automate the process between the client and the
						service provider such the appraiser, logistics and curator. Issuance
						Collectors, Gallery, And Fine Art assets acquisitions companies can
						tokenize their Artwork assets.
					</p>
					{/* <div className='container d-flex justify-content-center'>
						<hr className='black-line' />
						<hr className='red-line' />
						<hr className='green-line' />
					</div> */}
				</div>
			</section>
			<section className='container-fluid'>
				<>
					<Row>
						<Col className='text-center '>
							<h2
								className='d-flex justify-content-center p-5'
								style={
									(HeadingColor, { marginBottom: '-50px', marginTop: '-60px' })
								}
								id='tokenize-section-2-h2'>
								Tokenize
							</h2>

							<div className='container d-flex justify-content-center'>
								<hr className='black-line' />
								<hr className='red-line' />
								<hr className='green-line' />
							</div>
						</Col>
					</Row>
					<section className='tokenize-bg'>
						<div className='container  d-flex justify-content-center p-5'>
							<a href='https://alphaseed-tech.herokuapp.com/'>
								<Button
									type='submit'
									variant='primary'
									className='button-color m-2 '>
									Tokenize Now<i className='fas fa-coins ml-2'></i>
								</Button>{' '}
							</a>
						</div>
					</section>

					<div className='row' style={{ padding: '50px' }}>
						<div className='col-sm'>
							<h1 style={(Font, { color: '#8599AC' })}>
								Art{' '}
								<span style={{ fontWeight: '400', color: '#212C51' }}>
									- Tokenization
								</span>
								{/* <Signature style={{ width: '150px' }} /> */}
							</h1>

							<p style={(Font, { textAlign: 'justify' })}>
								The fractional ownership of existing art pieces helps artists
								and galleries with viable businesses by making artwork into
								commodities and adding a monetary value. This opens up the art
								world into uncharted territory where the decision-makers are the
								investors or the token holders.
							</p>
							<b>
								<strong style={{ fontWeight: 'bolder', textAlign: 'justify' }}>
									Tokenization is the process of converting rights to an asset
									into a digital token on a blockchain. It provides a way to
									enable efficient ownership transfer and secondary market that
									decreases friction in such a conservative industry as fine
									art. Market is growing by two-digit percentage every year and
									recently reached $63B. 20%+ increase in auction sales
									worldwide, but only 8% of total art auction sales are online.
									In order to sustain that growth, industry should be digitally
									transformed.
								</strong>
							</b>
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

			<>{/* <NewsLetter /> */}</>
		</>
	)
}

export default Tokenize
