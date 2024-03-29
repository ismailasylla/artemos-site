import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { listUsers, deleteUser } from '../../actions/userActions'

const UserListScreen = ({ history }) => {
	const dispatch = useDispatch()

	const userList = useSelector((state) => state.userList)
	const { loading, error, users } = userList

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const userDelete = useSelector((state) => state.userDelete)
	const { success: successDelete } = userDelete

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listUsers())
		} else {
			history.push('/login')
		}
	}, [dispatch, history, successDelete, userInfo])

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure')) {
			dispatch(deleteUser(id))
		}

		console.log('deleted')
	}

	return (
		<div div className='container mt-3'>
			<h1>Users</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Table striped bordered hover responsive className='table-sm'>
					<thead>
						<tr>
							<th>ID</th>
							<th>NAME</th>
							<th>EMAIL</th>
							<th>ADMIN</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<td>{user._id}</td>
								<LinkContainer to={`/admin/user/profile/${user._id}`}>
									<td>
										<img
											src='https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'
											alt=''
											className='rounded-circle mb-2 float-left'
											style={{ width: '30px' }}
										/>
										<span className='float-left ml-2'>
											<strong>{user.name}</strong>
										</span>
									</td>
								</LinkContainer>

								<td>
									<a href={`mailto:${user.email}`} style={{ color: 'blue' }}>
										{user.email}
									</a>
								</td>
								<td>
									{user.isAdmin ? (
										<i className='fas fa-check' style={{ color: 'green' }}></i>
									) : (
										<i className='fas fa-times' style={{ color: 'red' }}></i>
									)}
								</td>
								<td>
									<LinkContainer
										to={`/admin/user/${user._id}/edit`}
										className='m-1'>
										<Button variant='light' className='btn-sm'>
											<i className='fas fa-edit'></i>
										</Button>
									</LinkContainer>
									<Button
										variant='danger'
										className='btn-sm'
										onClick={() => deleteHandler(user._id)}>
										<i className='fas fa-trash'></i>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</div>
	)
}

export default UserListScreen
