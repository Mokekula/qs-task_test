import React, { useState, useEffect } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { ProductsInCart } from '../ProductsInCart/ProductsInCart';
import { getCart } from '../../api/api';

export const Cart = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setLoading] = useState(true);

	//Получение списка продуктов в корзине
	useEffect(() => {
		async function fetchGetCart() {
			return await getCart();
		}

		fetchGetCart()
			.then((res) => {
				setProducts(res);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	const totalPrice = products.reduce((prev, current) => {
		return prev + current.price * current.quantinity;
	}, 0);

	//Рендер корзины
	return (
		<div className="cart">
			<Link to="/#1" className="cart__to-products">
				Go to products
			</Link>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<ul className="cart__list">
					<ProductsInCart products={products} />
				</ul>
			)}
			<div className="cart__total-price">Total price: {totalPrice}</div>
		</div>
	);
};
