import React from 'react';
import './ProductsInCart.css';
import { editProductInCart, deleteFromCart, editProduct } from '../../api/api';

export const ProductsInCart = ({ products }) => {
	//Установка количества продуктов
	const handleTotalProducts = (e) => {
		const target = e.target;
		const totalProducts = +target.value + +target.name;

		async function editTotalProducts() {
			if (totalProducts > 0) {
				return await editProductInCart(e.target.id, { quantinity: totalProducts });
			}
		}

		editTotalProducts().catch((error) => console.log(error));
	};

	//Удаление продукта из карты
	const handleDelete = (e) => {
		const id = e.target.id;

		async function loadCreateProduct() {
			return await deleteFromCart(id);
		}

		async function editAddedCard() {
			return await editProduct(id, {
				inCart: false,
			});
		}

		loadCreateProduct().catch((error) => console.log(error));

		editAddedCard()
			.then(() => {
				alert('Deleted from cart');
			})
			.catch((error) => console.log(error));
	};

	//Рендер продукта в корзине
	return products.map((product) => (
		<li key={product.id} className="cart__item">
			<div>Brand: {product.title}</div>
			<div>Price: {product.price}</div>
			<div>Description: {product.description}</div>
			<div className="cart__btns">
				<button className="cart__del-btn" id={product.id} onClick={handleDelete}>
					Delete
				</button>

				<button
					className="cart__counter"
					id={product.id}
					onClick={handleTotalProducts}
					value={product.quantinity}
					name={1}>
					+1
				</button>

				<button
					className="cart__counter"
					id={product.id}
					onClick={handleTotalProducts}
					value={product.quantinity}
					name={-1}>
					-1
				</button>
			</div>

			<div className="cart__total-products">Total products: {product.quantinity}</div>
		</li>
	));
};
