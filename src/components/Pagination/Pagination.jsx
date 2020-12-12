import React from 'react';

export const Pagination = ({ setPage, productsOnPage, products }) => {
	const handlePage = (e) => {
		e.preventDefault();
		setPage(Number(e.target.id));
	};

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(products.length / productsOnPage); i++) {
		pageNumbers.push(i);
	}

	const showPageNumbers = pageNumbers.map((number) => {
		return (
			<li key={number} id={number} onClick={handlePage} className="main__product-page">
				{number}
			</li>
		);
	});

	return <ul className="main__product-pagination">{showPageNumbers}</ul>;
};
