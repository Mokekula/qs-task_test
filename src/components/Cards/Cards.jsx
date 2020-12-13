import React from 'react';
import './Cards.css';
import { Link, Route } from 'react-router-dom';
import { EditView } from '../EditView/EditView';

export const Cards = ({ page, productsOnPage, products, filter }) => {
	const lastProduct = page * productsOnPage;
	const firstProduct = lastProduct - productsOnPage;

	const currentProducts = [];

	for (let i = firstProduct; i < lastProduct; i++) {
		if (
			products[i] &&
			(products[i].title.toLowerCase().includes(filter.toLowerCase()) || !filter)
		) {
			currentProducts.push(products[i]);
		}
	}

	const oneProduct = currentProducts.map((product) => (
		<li key={product.id} className="main__product-item">
			<div> Brand: {product.title}</div>
			<div> Price: {product.price}</div>
			<div> Description: {product.description}</div>
			<div className="main__btns">
				<Link to={`/${product.id}`} className="main__btn">
					Edit
				</Link>
				<button className="main__btn">Delete</button>
				<button className="main__btn">Add to cart</button>
			</div>
		</li>
	));

	return oneProduct;
};
