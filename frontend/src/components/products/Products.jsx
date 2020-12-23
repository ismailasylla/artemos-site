import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Product from './Product'
import { listProducts } from '../../actions/productActions'
import Message from '../Message'
import Loader from '../Loader'
import Paginate from '../../components/Paginate'

const Products = ({ keyword, pageNumber }) => {
	const dispatch = useDispatch()

	const productList = useSelector((state) => state.productList)
	const { loading, error, products, page, pages } = productList

	useEffect(() => {
		dispatch(listProducts(keyword))
	}, [dispatch, keyword, pageNumber])

	return (
		<div>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Container>
					<Row>
						<Col className='text-center py-5 '>
							<div className='container d-flex justify-content-center'>
								{/* <Signature
							style={{ width: '150px' }}
							className='d-flex justify-content-center'
						/> */}
							</div>
							<h1 className='featuredItems'>Arts</h1>

							<div className='container d-flex justify-content-center'>
								<hr className='black-line' />
								<hr className='red-line' />
								<hr className='green-line' />
							</div>
						</Col>
					</Row>
					<Row>
						<section className='text-gray-700 body-font'>
							<div className='container  mx-auto'>
								<div className='flex flex-wrap -m-4'>
									{products.map((product) => (
										// <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
										<Col key={product._id}>
											<Product product={product} />
										</Col>
									))}
								</div>
							</div>
						</section>
					</Row>
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ''}
					/>
				</Container>
			)}
		</div>
	)
}

export default Products
