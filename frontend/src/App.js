import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import HomeScreen from './components/screens/HomeScreen'
import { Switch, Route } from 'react-router-dom'
import ProductScreen from './components/products/ProductScreen'
import Products from './components/products/Products'
import Cart from './components/screens/CartScreen'
import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import ProfileScreen from './components/screens/ProfileScreen'
import ShippingScreen from './components/screens/ShippingScreen'
import PaymentScreen from './components/screens/PaymentScreen'
import PlaceOrderScreen from './components/screens/PlaceOrderScreen'
import OrderScreen from './components/screens/OrderScreen'
import UserListScreen from './components/screens/UserListScreen'
import UserEditScreen from './components/screens/UserEditScreen'
import ProductListScreen from './components/screens/ProductListScreen'

function App() {
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route path='/profile' component={ProfileScreen} />
					<Route path='/register' component={RegisterScreen} />
					<Route path='/login' component={LoginScreen} />
					<Route path='/contact' component={Contact} />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/products' component={Products} />
					<Route path='/cart/:id?' component={Cart} />
					<Route path='/shipping' component={ShippingScreen} />
					<Route path='/payment' component={PaymentScreen} />
					<Route path='/placeorder' component={PlaceOrderScreen} />
					<Route path='/order/:id' component={OrderScreen} />
					<Route path='/admin/userlist' component={UserListScreen} />
					<Route path='/admin/user/:id/edit' component={UserEditScreen} />
					<Route path='/admin/productlist' component={ProductListScreen} />
					<Route path='/' exact component={HomeScreen} />
				</Switch>
			</main>
			<Footer />
		</>
	)
}

export default App
