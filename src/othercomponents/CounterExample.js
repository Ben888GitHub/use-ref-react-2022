import { useState, useRef, useEffect } from 'react';

function CounterExample() {
	const [stateCounter, setStateCounter] = useState(0);
	const refCounter = useRef(0);
	let variableCounter = 0;

	function handleStateCounter() {
		setStateCounter(stateCounter + 1);
		console.log(stateCounter);
	}

	function handleRefCounter() {
		refCounter.current += 1;
		console.log(refCounter);
	}

	function handleVariableCounter() {
		variableCounter += 1;
		console.log('Variable Counter: ', variableCounter);
	}

	return (
		<>
			<button onClick={handleStateCounter}>
				State Counter: {stateCounter}
			</button>
			<button onClick={handleRefCounter}>
				Ref Counter: {refCounter.current}
			</button>

			<button onClick={handleVariableCounter}>
				Variable Counter: {variableCounter}
			</button>
		</>
	);
}

export default CounterExample;
