import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import FeaturedItems from './components/FeaturedItems'
import Partners from './components/Partners'

function App() {
	return (
		<>
			<Header />
			<main>
				<Carousel />
				<FeaturedItems />
				<Partners />
			</main>
			<Footer />
		</>
	)
}

export default App
