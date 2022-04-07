import { useState, useRef } from 'react';

function AddItem() {
	const [names, setNames] = useState([]);
	const nameRef = useRef({});

	const handleSubmit = () => {
		setNames([
			...names,
			{
				id: nameRef.current.id,
				name: nameRef.current.name
			}
		]);

		console.log(nameRef.current.id);
		console.log(nameRef.current.name);
		console.log(names.length);
		// console.log(nameRef.current.value);
		// nameRef.current.value = '';
	};

	const handleChange = (e) => {
		nameRef.current = {
			id: Math.random(),
			name: e.target.value
		};
		console.log(nameRef);
	};

	return (
		<>
			<input type="text" onChange={handleChange} />
			<button onClick={handleSubmit}>Add Name</button>
			{names.length > 0 &&
				names.map((name, index) => (
					<div key={index}>
						<h3>{name.name}</h3>
						<button>Delete {name.name}</button>
						<br />
						<br />
					</div>
				))}
		</>
	);
}

export default AddItem;
