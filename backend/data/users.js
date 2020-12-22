import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@artemos.com',
		password: bcrypt.hashSync('artemos12345', 10),
		isAdmin: true,
	},
	{
		name: 'ismail',
		email: 'ismail@alphaseed.tech',
		password: bcrypt.hashSync('artemos12345', 10),
		isAdmin: true,
	},
	{
		name: 'haytham',
		email: 'haytham@artemos.com',
		password: bcrypt.hashSync('artemos12345', 10),
	},
]

export default users
