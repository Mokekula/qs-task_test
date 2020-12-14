import React, { useState, useEffect } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { ProductsInCart } from '../ProductsInCart/ProductsInCart';
import { getCart } from '../../api/api';

export const Cart = () => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [products, setProducts] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(async () => {
		const productsArr = await getCart();

		setProducts(productsArr);
		setLoading(false);
	}, []);

	return (
		<div className="cart">
			<Link to="/#1" className="cart__to-products">
				Go to products
			</Link>
			{isLoading ? <div>Loading...</div> : <ProductsInCart products={products} />}
			<div className="cart__total-price">Total price: {totalPrice}</div>
		</div>
	);
};
