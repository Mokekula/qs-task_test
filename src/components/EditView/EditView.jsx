import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './EditView.css';
import { getOneProduct, editProduct } from '../../api/api';

export const EditView = (props) => {
	const [product, setProduct] = useState({});
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');

	let history = useHistory();

	useEffect(async () => {
		const productId = props.location.pathname.slice(1);
		const oneProduct = await getOneProduct(productId);

		setProduct(oneProduct);
	}, []);

	const handleSave = (e) => {
		e.preventDefault();

		const changedProduct = {
			title: title ? title : product.title,
			price: price ? price : product.price,
			description: description ? description : product.description,
		};

		editProduct(product.id, changedProduct);

		history.push(`/#1`);
	};

	const handleTitle = (e) => {
		const value = e.target.value;

		if (value && value.match(/^[a-zA-Z]+$/)) {
			setTitle(value);
		} else {
			setTitle('');
		}
	};

	const handlePrice = (e) => {
		const value = e.target.value;

		if (value && value.match(/^[0-9]+$/)) {
			setPrice(value);
		} else {
			setPrice('');
		}
	};

	const handleDescription = (e) => {
		const value = e.target.value;

		if (value) {
			setDescription(value);
		} else {
			setDescription('Nothing');
		}
	};

	return (
		<>
			<div className="edit">
				<div className="edit__form-wrap">
					<form className="edit__form">
						<label htmlFor="title" className="edit__label">
							Title:
						</label>
						<input
							type="text"
							id="title"
							className="edit__input"
							defaultValue={product.title}
							onChange={handleTitle}
							maxLength="15"
							placeholder={product.title}
						/>

						<label htmlFor="price" className="edit__label">
							Price:
						</label>
						<input
							type="text"
							id="price"
							className="edit__input"
							onChange={handlePrice}
							maxLength="4"
							placeholder={product.price}
							defaultValue={product.price}
						/>

						<label htmlFor="description" className="edit__label">
							Description:
						</label>
						<textarea
							id="description"
							className="edit__text"
							onChange={handleDescription}
							placeholder={product.description}
							defaultValue={product.description}
						/>

						<button className="edit__save" onClick={handleSave}>
							Изменить
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
