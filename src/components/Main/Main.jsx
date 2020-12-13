import React, { useState, useEffect } from 'react';
import './Main.css';
import { Link, Route } from 'react-router-dom';
import { getProducts } from '../../api/api';
import { Cards } from '../Cards/Cards';
import { Pagination } from '../Pagination/Pagination';
import { CardsWithFilter } from '../CardsWithFilter/CardsWithFilter';

export const Main = () => {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoading, setLoading] = useState(true);
	const productsOnPage = 10;

	useEffect(async () => {
		const productsArr = await getProducts();
		setProducts(productsArr);
		setLoading(false);
	}, []);

	return (
		<div className="main">
			{/* <Link to="/creating" className="main__to-create">Create View</Link> */}
			<Link to="/creating" className="main__to-create" products={products}>
				Create View
			</Link>
			<CardsWithFilter
				page={page}
				productsOnPage={productsOnPage}
				products={products}
				isLoading={isLoading}
			/>
			<Pagination
				page={page}
				productsOnPage={productsOnPage}
				setPage={setPage}
				products={products}
				setProducts={setProducts}
			/>
		</div>
	);
};
