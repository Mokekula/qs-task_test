import React, { useState, useEffect } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import { getProducts } from '../../api/api';
import { Pagination } from '../Pagination/Pagination';
import { CardsWithFilter } from '../CardsWithFilter/CardsWithFilter';

export const Main = () => {
	//TODO: ДОБАВИТЬ КОММЕНТЫ ВЕЗДЕ
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoading, setLoading] = useState(true);
	const productsOnPage = 10;

	//TODO: Вместо асинк эвейтов промиссы и then в юз эффектах

	//Получение всего списка продуктов
	useEffect(() => {
		async function fetchGetProducts() {
			return await getProducts();
		}

		fetchGetProducts()
			.then((res) => {
				setProducts(res);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	//Рендер основной странички
	return (
		<div className="main">
			<Link to="/creating" className="main__to-create" products={products}>
				Create View
			</Link>
			<Link to="/cart" className="main__to-cart" products={products}>
				Cart
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
