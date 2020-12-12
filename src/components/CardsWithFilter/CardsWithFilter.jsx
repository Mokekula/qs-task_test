import React, { useState } from 'react';
import { Cards } from '../Cards/Cards';

export const CardsWithFilter = ({ page, productsOnPage, products, isLoading }) => {
	const [filter, setFilter] = useState(null);

	const handleFilter = (e) => {
		const value = e.target.value;
		if (value) {
			setFilter(value);
		} else setFilter(null);
	};

	return (
		<>
			<form className="main__form">
				<label htmlFor="filter" className="main__product-filter-label">
					Enter filter:
					<input type="text" className="main__product-filter" id="filter" onChange={handleFilter} />
				</label>
			</form>

			<ul className="main__product-list">
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<Cards page={page} productsOnPage={productsOnPage} products={products} filter={filter} />
				)}
			</ul>
		</>
	);
};
