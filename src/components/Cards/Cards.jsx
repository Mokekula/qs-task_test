import React, { useEffect, useState } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import { deleteProduct, editProduct, addToCart } from '../../api/api';

export const Cards = ({ page, productsOnPage, products, filter }) => {
	const [currentProducts, setCurrentProducts] = useState([]);

	//Вычисление номера первого и последнего продукта на страничке
	const lastProduct = page * productsOnPage;
	const firstProduct = lastProduct - productsOnPage;

	//Установка продуктов, которые надо отрендерить, в зависимости от номера первого и последнего продуктов
	useEffect(() => {
		const currentProducts = products.slice(firstProduct, lastProduct);

		setCurrentProducts(currentProducts);
	}, [page]);

	//Установка продуктов, которые надо отрендерить, в зависимости от фильтра
	useEffect(() => {
		if (filter) {
			const filterProducts = products.filter((product) => {
				const checkFilter = product.title.toLowerCase().includes(filter.toLowerCase());
				return checkFilter;
			});

			setCurrentProducts(filterProducts);
		}
	}, [filter]);

	//DELETE запрос продукта по клику
	const handleDelete = (e) => {
		async function loadCreateProduct() {
			return await deleteProduct(e.target.id);
		}

		loadCreateProduct().catch((error) => console.log(error));
	};

	//Добавление в карту
	const handleAddCart = (e) => {
		const id = e.target.id;
		const thisProduct = products.filter((product) => product.id === id);

		const productToCart = {
			id,
			title: thisProduct[0].title,
			price: thisProduct[0].price,
			description: thisProduct[0].description,
			quantinity: 1,
		};

		async function editAddedCard() {
			return await editProduct(id, {
				inCart: true,
			});
		}

		async function addProductToCart() {
			return await addToCart(productToCart);
		}

		addProductToCart().catch((error) => console.log(error));

		editAddedCard()
			.then(() => {
				alert('Added to cart');
			})
			.catch((error) => console.log(error));
	};

	//Рендер продукта
	return currentProducts.map((product) => (
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
				<button
					className="main__btn"
					disabled={product.inCart}
					id={product.id}
					onClick={handleAddCart}>
					Add to cart
				</button>
			</div>
		</li>
	));
};
