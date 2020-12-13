import React from 'react';
import { Link } from 'react-router-dom';
import './EditView.css';

export const EditView = (props) => {
	const handleKek = () => {
		console.log(props);
	};

	return (
		<>
			<div className="edit">
				<div className="edit__form-wrap">
					<form className="edit__form">
						<label htmlFor="title" className="edit__label">
							Title:
						</label>
						<input type="text" id="title" className="edit__input" />

						<label htmlFor="price" className="edit__label">
							Price:
						</label>
						<input type="text" id="price" className="edit__input" />

						<label htmlFor="description" className="edit__label">
							Description:
						</label>
						<input type="text" id="description" className="edit__input" />
					</form>
				</div>
				<button className="edit__save" onClick={handleKek}>
					MEOW
				</button>
				<Link to="/#1" className="edit__save">
					Изменить
				</Link>
			</div>
		</>
	);
};
