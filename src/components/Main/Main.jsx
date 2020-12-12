import React, { useState, useEffect } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import { getProducts } from '../../api/api';
import { Cards } from '../Cards/Cards';
import { Pagination } from '../Pagination/Pagination';
import { CardsWithFilter } from '../CardsWithFilter/CardsWithFilter';

export const Main = (props) => {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoading, setLoading] = useState(true);
	const productsOnPage = 10;

	useEffect(async () => {
		const productsArr = await getProducts();
		setProducts(productsArr);
		setLoading(false);
	}, []);

	const kek228 = (e) => {
		e.preventDefault();
		console.log(products);
	};
	//Вынести стили
	// cart должно быть со своим айди в имени а переход по ивенту
	// передавать пропсы в отдельный объект
	// форму тоже вынести в отдельный компонент

	return (
		<div className="main">
			{/* <Link to="/creating" className="main__to-create">Create View</Link> */}
			<button className="main__to-create" onClick={kek228}>
				Create View
			</button>
			<CardsWithFilter
				page={page}
				productsOnPage={productsOnPage}
				products={products}
				isLoading={isLoading}
			/>
			<Pagination productsOnPage={productsOnPage} setPage={setPage} products={products} />
		</div>
	);
};
