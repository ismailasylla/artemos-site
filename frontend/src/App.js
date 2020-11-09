import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Carousel from './components/Carousel'
import FeaturedItems from './components/FeaturedItems'
import Partners from './components/Partners'
import Sold from './components/Sold'

function App() {
	return (
		<>
			<Header />
			<main>
				<Carousel />
				<FeaturedItems />
				<Contact />
				<Partners />

				<Sold />
			</main>
			<Footer />
		</>
	)
}

export default App
