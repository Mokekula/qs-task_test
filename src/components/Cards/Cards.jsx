import React, { useEffect, useState } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../api/api';

export const Cards = ({ page, productsOnPage, products, filter }) => {
	//УДАЛЕНИЕ
	const lastProduct = page * productsOnPage;
	const firstProduct = lastProduct - productsOnPage;
	const [currentProducts, setCurrentProducts] = useState([]);

	useEffect(() => {
		const currentProducts = products.slice(firstProduct, lastProduct);

		setCurrentProducts(currentProducts);
	}, [page]);

	useEffect(() => {
		if (filter) {
			const filterProducts = products.filter((product) => {
				const checkFilter = product.title.toLowerCase().includes(filter.toLowerCase());
				return checkFilter;
			});

			setCurrentProducts(filterProducts);
		}
	}, [filter]);

	const handleDelete = (e) => {
		async function loadCreateProduct() {
			return await deleteProduct(e.target.id);
		}

		loadCreateProduct();
	};

	//Мб юз эфект который меняет какоето значение (где написанно сколько всего продуктов) при этом следит за имзенением курент продукт ???
	//В эдите по айдишнику из мб строки через фильтр вытянуть нужный элемент
	const oneProduct = currentProducts.map((product) => (
		<li key={product.id} className="main__product-item">
			<div> Brand: {product.title}</div>
			<div> Price: {product.price}</div>
			<div> Description: {product.description}</div>
			<div className="main__btns">
				<Link to={`/${product.id}`} className="main__btn" id={product.id}>
					Edit
				</Link>
				<button className="main__btn" onClick={handleDelete} id={product.id}>
					Delete
				</button>
				<button className="main__btn">Add to cart</button>
			</div>
		</li>
	));

	return oneProduct;
};
