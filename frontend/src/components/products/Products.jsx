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
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
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
