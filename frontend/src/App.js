import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import FeaturedItems from './components/FeaturedItems'
import Sold from './components/Sold'

function App() {
	return (
		<>
			<Header />
			<main>
				<Carousel />
				<FeaturedItems />
				<Sold />
			</main>
			<Footer />
		</>
	)
}

export default App
