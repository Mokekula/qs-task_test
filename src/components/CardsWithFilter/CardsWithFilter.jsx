import React, { useState } from 'react';
import { Cards } from '../Cards/Cards';
import './CardsWithFilter.css';

export const CardsWithFilter = ({ page, productsOnPage, products, isLoading }) => {
	const [filter, setFilter] = useState('');

	//Установка фильтра в зависимости от того, что написано в инпуте фильтра
	const handleFilter = (e) => {
		const filterValue = e.target.value;

		if (filterValue) {
			setFilter(filterValue);
		} else {
			setFilter('');
		}
	};

	//Рендер инпута фильтра и списка продуктов с учетом фильтра
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
