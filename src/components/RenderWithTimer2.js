import { useRef, useEffect } from 'react';

function RenderWithTimer2() {
	// Initialized a hook to hold the reference to the title div.
	const name = useRef('Aleem');

	useEffect(() => {
		setTimeout(() => {
			name.current = 'Kravchenko';
			console.log(name);
		}, 2000);
	});

	return <div ref={name}>{name.current}</div>;
}

export default RenderWithTimer2;
