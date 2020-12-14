import React, { useState } from 'react';
import './ProductsInCart.css';
import { Link } from 'react-router-dom';

export const ProductsInCart = () => {
	const [totalProducts, setTotalProducts] = useState(1);

	//TODO: МБ перенести ul назад в корзину, а тут оставить только лишку(из-за счетчика)
	//Перевести все на русский

	return (
		<ul className="cart__list">
			<li key={1} className="cart__item">
				<div>Brand:</div>
				<div>Price:</div>
				<div>Description:</div>
				<div className="cart__btns">
					<button className="cart__del-btn">Delete</button>
					<button className="cart__counter">+1</button>
					<button className="cart__counter">-1</button>
				</div>
				<div className="cart__total-products">Total products: {totalProducts}</div>
			</li>
			<li key={2} className="cart__item">
				<div>Brand:</div>
				<div>Price:</div>
				<div>Description:</div>
				<div className="cart__btns">
					<button className="cart__del-btn">Delete</button>
					<button className="cart__counter">+1</button>
					<button className="cart__counter">-1</button>
				</div>
				<div className="cart__total-products">Total products: {totalProducts}</div>
			</li>
		</ul>
	);
};
