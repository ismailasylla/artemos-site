import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import FeaturedItems from './components/FeaturedItems'

function App() {
	return (
		<>
			<Header />
			<main>
				<Carousel />
				<FeaturedItems />
			</main>
			<Footer />
		</>
	)
}

export default App
