import React, { useEffect } from 'react';
import './Pagination.css';
import { useHistory } from 'react-router-dom';

export const Pagination = ({ setPage, productsOnPage, products }) => {
	let history = useHistory();

	//Переключение странички
	const handlePage = (e) => {
		e.preventDefault();
		setPage(e.target.id);
		history.push(`#${e.target.id}`);
	};

	//Установка необходимой странички
	useEffect(() => {
		const page = history.location.hash.slice(1);

		setPage(page);
	}, []);

	//Генерация кнопок страниц
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(products.length / productsOnPage); i++) {
		pageNumbers.push(i);
	}

	//Рендер списка кнопок
	return (
		<ul className="main__product-pagination">
			{pageNumbers.map((number) => {
				return (
					<li key={number} id={number} onClick={handlePage} className="main__product-page">
						{number}
					</li>
				);
			})}
		</ul>
	);
};
