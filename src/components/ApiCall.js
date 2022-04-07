// refer to: https://www.bezkoder.com/react-axios-example/

import { useState, useRef } from 'react';
import axios from 'axios';

function ApiCall() {
	const [product, setProduct] = useState({});
	const id = useRef(null);
	// This is also applicable in:
	// post, delete, and put

	const getProduct = async () => {
		try {
			console.log(Number(id.current));
			const response = await axios.get(
				`https://fakestoreapi.com/products/${id.current}`
			);
			console.log(response.data);
			setProduct(response.data);
		} catch (err) {
			console.log(err);
			console.log(err.message);
		}
	};

	const handleChange = (e) => {
		id.current = e.target.value;
		console.log(id.current);
	};

	return (
		<div>
			<input type="number" onChange={handleChange} />
			<button onClick={getProduct}>Query Product</button>
			<br />
			{product && (
				<>
					<h3>{product.title}</h3>
					<h4>{product.price}</h4>
					<h5>{product.description}</h5>
					<h5>{product.category}</h5>
					<h5>{product.rating?.count}</h5>
				</>
			)}
		</div>
	);
}

export default ApiCall;
