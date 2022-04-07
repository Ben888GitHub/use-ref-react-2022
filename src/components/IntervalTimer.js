import { useState, useRef, useEffect } from 'react';

function IntervalTimer() {
	// initial counter to be increased by 1 every second in interval
	const [counter, setCounter] = useState(0);
	const [pause, setPause] = useState(false);

	// identifier to store a setInterval() function to run the setCounter() function every second
	// without causing re-render when it increases each second
	const identifier = useRef(null);

	const increaseCounter = () => setCounter(counter + 1);

	const clearIdentifier = () => clearInterval(identifier.current);

	useEffect(() => {
		identifier.current = setInterval(increaseCounter, 1000);

		// counter === 15 && clearIdentifier();
		return clearIdentifier;
	}, [counter]);

	const handleClick = () => {
		if (!pause) {
			clearInterval(identifier.current);
		} else {
			identifier.current = setInterval(increaseCounter, 1000);
		}
		setPause(!pause);
	};

	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={handleClick}>
				{pause ? 'Run Counter' : 'Pause Counter'}
			</button>
			{/* <button>Continue Count</button> */}
		</div>
	);
}

export default IntervalTimer;
