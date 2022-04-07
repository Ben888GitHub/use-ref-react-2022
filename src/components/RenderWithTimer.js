import { useRef, useEffect } from 'react';

function RenderWithTimer() {
	// Initialized a hook to hold the reference to the title div.
	const titleRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			titleRef.current.textContent = 'Updated Text';
		}, 2000);
	}, []);

	return (
		<div>
			<h3 ref={titleRef}>Render With Timer</h3>
		</div>
	);
}

export default RenderWithTimer;
