import { useRef } from 'react';

function ClearInputRef() {
	const inputRef = useRef();

	const reset = () => {
		inputRef.current.value = '';
	};

	return (
		<>
			<input type="text" ref={inputRef} placeholder="uncontrolled" />
			<button onClick={reset}>delete all</button>
		</>
	);
}

export default ClearInputRef;
