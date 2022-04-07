import React, { useState, useRef } from 'react';

function HideShowExample() {
	const [showValue, setShowValue] = useState(false);

	const showValueRef = useRef(false);

	// const handleShowValue = () => {
	// 	setShowValue(!showValue);
	// 	console.log(showValue); // re-render ???
	// };

	const handleShowValueRef = () => {
		showValueRef.current = !showValueRef.current;
		console.log(showValueRef.current.classList);
		console.log(showValueRef.current);
	};

	return (
		<>
			<h2>HideShowExample</h2>
			<br />
			{/* <button onClick={handleShowValue}>Toggle</button>
			{showValue && <h3>State Value</h3>} */}
			<br />
			<br />
			<button onClick={handleShowValueRef}>Toggle Ref</button>
			{showValueRef.current && <h3>Ref Value</h3>}
		</>
	);
}

export default HideShowExample;
