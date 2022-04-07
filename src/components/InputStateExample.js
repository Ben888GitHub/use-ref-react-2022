import React, { useState, useRef } from 'react';

function InputStateExample() {
	const [name, setName] = useState('');

	const username = useRef('');

	const handleChange = (e) => {
		setName(e.target.value);
		console.log(e.target.value);
		console.log(name); // name causes re-render
	};

	const handleChangeWithRef = (e) => {
		// username.current.value = e.target.value;
		username.current = e.target.value;
		console.log(username); // username doesn't cause re-render because we use useRef()
		console.log(username.current);
	};

	return (
		<>
			<input type="text" value={name} onChange={handleChange} />
			<br />
			<br />
			<br />
			<input
				type="text"
				// value={username.current.value}
				onChange={handleChangeWithRef}
			/>
		</>
	);
}

export default InputStateExample;
