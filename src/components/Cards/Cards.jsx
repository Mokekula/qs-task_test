import React from 'react';

export const Cards = ({ page, productsOnPage, products, filter }) => {
	const lastProduct = page * productsOnPage;
	const firstProduct = lastProduct - productsOnPage;

	const currentProducts = [];

	for (let i = firstProduct; i <= lastProduct; i++) {
		if (products[i] && (products[i].title.includes(filter) || !filter)) {
			currentProducts.push(products[i]);
		}
	}

	const oneProduct = currentProducts.map((product, index) => (
		<li key={product.id} className="main__product-item">
			<div> {product.title}</div>
			<div>{product.price}</div>
			<div>{product.description}</div>
			<button className="main__btn">Edit</button>
			<button className="main__btn">Delete</button>
			<button className="main__btn">Add to cart</button>
		</li>
	));

	return oneProduct;
};
