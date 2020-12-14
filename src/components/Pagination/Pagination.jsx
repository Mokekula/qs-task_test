import React, { useState, useEffect } from 'react';
import './Pagination.css';
import { Link, useHistory } from 'react-router-dom';

export const Pagination = ({ setPage, productsOnPage, products }) => {
	let history = useHistory();

	const handlePage = (e) => {
		e.preventDefault();
		setPage(e.target.id);
		history.push(`#${e.target.id}`);
	};

	useEffect(() => {
		const page = history.location.hash.slice(1);

		setPage(page);
	}, []);

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

	return (
		<>
			<ul className="main__product-pagination">{showPageNumbers}</ul>
		</>
	);
};
