import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Home from './components/Home'
import Product from './components/products/Product'

import { Switch, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/contact' component={Contact} />
					<Route path='/product/:id' component={Product} />
				</Switch>
			</main>
			<Footer />
		</>
	)
}

export default App
