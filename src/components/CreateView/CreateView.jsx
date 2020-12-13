import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateView.css';

export const CreateView = () => {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');

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
			setDescription('');
		}
	};

	const handleSave = (e) => {
		e.preventDefault();

		console.log(title, price, description);
	};

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
						<button className="create__save" type="submit">
							SAVE
						</button>
					</form>
					<span className="create__description-text">Description: {description}</span>
				</div>

				<Link to="/#1" className="create__save">
					Сохранить
				</Link>
			</div>
		</>
	);
};
