import React from 'react'
import Products from '../products/Products'

const SearchScreen = ({ match }) => {
	const keyword = match.params.keyword

	return (
		<div className='mt-5'>
			<div className='d-flex justify-content-center'>
				{keyword ? (
					<>
						<span className=''>
							<h1>Search Results for </h1>
						</span>
						<h1 className=' ml-1 text-success'> "{keyword}" </h1>
					</>
				) : (
					<>
						<span className=''>
							<h1>No results for</h1>
						</span>
						<h1 className=' ml-1 text-danger'>"{keyword}"</h1>
						<p>Try checking your spelling or use more general terms</p>
					</>
				)}
			</div>
			<Products keyword={keyword} />
		</div>
	)
}

export default SearchScreen
