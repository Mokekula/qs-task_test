import React, { useEffect, useState } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../api/api';

export const Cards = ({ page, productsOnPage, products, filter }) => {
	//TODO: УДАЛЕНИЕ
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

		loadCreateProduct();
	};

	//TODO:Добавление в карту
	const handleAddCart = () => {
		console.log(`Add cart`);
	};
	//TODO: Мб юз эфект который меняет какоето значение (где написанно сколько всего продуктов) при этом следит за имзенением курент продукт ???
	//Если product.inCart: true, то Add to Cart неактивна

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
				<button className="main__btn" onClick={handleAddCart}>
					Add to cart
				</button>
			</div>
		</li>
	));
};
