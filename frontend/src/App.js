import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom'
import ProductScreen from './components/products/ProductScreen'
import Products from './components/products/Products'

function App() {
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/contact' component={Contact} />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/products' component={Products} />
				</Switch>
			</main>
			<Footer />
		</>
	)
}

export default App
