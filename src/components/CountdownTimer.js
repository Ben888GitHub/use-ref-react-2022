import React, { useRef, useEffect, useState } from 'react';

function CountdownTimer() {
	const [num, setNum] = useState(100);
	const [pause, setPause] = useState(false);

	let intervalRef = useRef();

	const decreaseNum = () => setNum(num - 1);

	const clearIdentifier = () => clearInterval(intervalRef.current);

	useEffect(() => {
		intervalRef.current = setInterval(decreaseNum, 1000);

		// num === 15 && clearIdentifier();
		return clearIdentifier;
	}, [num]);

	const handleClick = () => {
		if (!pause) {
			clearInterval(intervalRef.current);
		} else {
			intervalRef.current = setInterval(decreaseNum, 1000);
		}
		setPause(!pause);
	};

	return (
		<div>
			<div>{num}</div>
			<button onClick={handleClick}>{pause ? 'Run' : 'Pause'}</button>
		</div>
	);
}

export default CountdownTimer;
