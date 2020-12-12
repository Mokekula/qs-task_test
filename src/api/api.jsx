export const getProducts = () => {
	return fetch(`http://localhost:3000/products`)
		.then((res) => res.json())
		.catch((error) => console.error(error));
};
