import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './CreateView.css';
import { addProduct } from '../../api/api';

export const CreateView = () => {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('Nothing');
	let history = useHistory();

	//Установка титула (бренда) продукта
	const handleTitle = (e) => {
		const value = e.target.value;

		if (value && value.match(/^[a-zA-Z]+$/)) {
			setTitle(value);
		} else {
			setTitle('');
		}
	};

	//Установка цены продукта
	const handlePrice = (e) => {
		const value = e.target.value;

		if (value && value.match(/^[0-9]+$/)) {
			setPrice(value);
		} else {
			setPrice('');
		}
	};

	//Установка описания продукта
	const handleDescription = (e) => {
		const value = e.target.value;

		if (value) {
			setDescription(value);
		} else {
			setDescription('Nothing');
		}
	};

	//Сохранение нового продукта через POST запрос, по введенным в инпутах данным и с генерацией случайного айди
	//Переход на первую страничку продуктов после сохранения
	const handleSave = (e) => {
		e.preventDefault();

		const randomId = Math.random().toString(36).substring(2);

		const newProduct = {
			id: randomId,
			title,
			price,
			description,
			inCart: false,
		};

		async function loadCreateProduct() {
			return await addProduct(newProduct);
		}

		if (title && price) {
			loadCreateProduct()
				.then(() => {
					history.push(`/#1`);
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			alert('Something went wrong');
		}
	};

	//Рендер странички создания нового продукта
	return (
		<>
			<div className="create">
				<div className="create__form-wrap">
					<form className="create__form" onSubmit={handleSave}>
						<label htmlFor="title" className="create__label">
							Title: {title}
						</label>
						<input
							type="text"
							id="title"
							className="create__input"
							onChange={handleTitle}
							maxLength="15"
							required
						/>

						<label htmlFor="price" className="create__label">
							Price: {price}
						</label>
						<input
							type="text"
							id="price"
							className="create__input"
							onChange={handlePrice}
							maxLength="4"
							required
						/>

						<label htmlFor="description" className="create__label">
							Description:
						</label>
						<textarea
							type="text"
							id="description"
							className="create__text"
							onChange={handleDescription}
						/>

						<button className="create__save" type="submit" onClick={handleSave}>
							Save
						</button>
					</form>
					<span className="create__description-text">Description: {description}</span>
				</div>

				<Link to="/#1" className="create__save">
					Back to products
				</Link>
			</div>
		</>
	);
};
