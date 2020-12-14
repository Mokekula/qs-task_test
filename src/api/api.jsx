export const getProducts = () => {
	return fetch(`http://localhost:3000/products`)
		.then((res) => res.json())
		.catch((error) => console.error(error));
};

export const addProduct = (product) => {
	return fetch(`http://localhost:3000/products`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(product),
	})
		.then((res) => res.json())
		.catch((error) => alert(error.message));
};

export const deleteProduct = (id) => {
	return fetch(`http://localhost:3000/products/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	}).catch((error) => console.log(error));
};

export const getOneProduct = (id) => {
	return fetch(`http://localhost:3000/products/${id}`)
		.then((res) => res.json())
		.catch((error) => console.error(error));
};

export const editProduct = (id, product) => {
	return fetch(`http://localhost:3000/products/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(product),
	}).catch((error) => console.log(error));
};
