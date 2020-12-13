import React, { useEffect, useState } from 'react';
import './Cards.css';
import { Link, Route } from 'react-router-dom';
import { EditView } from '../EditView/EditView';
import { deleteProduct } from '../../api/api';

export const Cards = ({ page, productsOnPage, products, filter }) => {
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
		deleteProduct(e.target.id);
	};

	//Мб юз эфект который меняет какоето значение (где написанно сколько всего продуктов) при этом следит за имзенением курент продукт ???
	const oneProduct = currentProducts.map((product) => (
		<li key={product.id} className="main__product-item">
			<div> Brand: {product.title}</div>
			<div> Price: {product.price}</div>
			<div> Description: {product.description}</div>
			<div className="main__btns">
				<Link to={`/${product.id}`} className="main__btn">
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
