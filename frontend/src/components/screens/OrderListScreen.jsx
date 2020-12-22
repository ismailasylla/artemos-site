import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { listOrders } from '../../actions/orderActions'
import OrderListPaginate from '../../components/OrderListPaginate'

const OrderListScreen = ({ history, match }) => {
	// const keyword = match.params.keyword
	const pageNumber = match.params.pageNumber || 1

	const dispatch = useDispatch()

	const orderList = useSelector((state) => state.orderList)
	const { loading, error, orders, page, pages } = orderList

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listOrders('', pageNumber))
		} else {
			history.push('/login')
		}
	}, [dispatch, history, userInfo, pageNumber])

	return (
		<div className='container mt-3'>
			<h1>Orders</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<Table striped bordered hover responsive className='table-sm'>
						<thead>
							<tr>
								<th>ID</th>
								<th>USER</th>
								<th>DATE</th>
								<th>TOTAL</th>
								<th>PAID</th>
								<th>DELIVERED</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr key={order._id}>
									<td>{order._id}</td>
									<td>{order.user && order.user.name}</td>
									<td>{order.createdAt.substring(0, 10)}</td>
									<td>${order.totalPrice}</td>
									<td>
										{order.isPaid ? (
											order.paidAt.substring(0, 10)
										) : (
											<i className='fas fa-times' style={{ color: 'red' }}></i>
										)}
									</td>
									<td>
										{order.isDelivered ? (
											<Message variant='success'>
												<i
													className='fas fa-check m-1'
													style={{ color: 'green' }}></i>
												Delivered on {order.deliveredAt.substring(0, 10)}
											</Message>
										) : (
											<>
												<Message variant='danger'>
													<i
														className='fas fa-times m-1'
														style={{ color: 'red' }}></i>
													Not Delivered
												</Message>
											</>
										)}
									</td>
									<td>
										<LinkContainer to={`/order/${order._id}`}>
											<Button variant='light' className='btn-sm'>
												Details
											</Button>
										</LinkContainer>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<OrderListPaginate
						pages={pages}
						page={page}
						// keyword={keyword ? keyword : ''}
						isAdmin={true}
					/>
				</>
			)}
		</div>
	)
}

export default OrderListScreen
