import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'

function App() {
	return (
		<>
			<Header />
			<main>
				<Carousel />
				<Container>
					<Row>
						<Col className='text-center py-3'>
							<h1 className='featuredIrems'>Featured Items</h1>
						</Col>
					</Row>
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App
