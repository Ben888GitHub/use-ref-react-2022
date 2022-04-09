import './App.css';
import InputStateExample from './components/InputStateExample';
import CounterExample from './othercomponents/CounterExample';
import HideShowExample from './othercomponents/HideShowExample';
import SimpleAuthForm from './components/SimpleAuthForm';
import IntervalTimer from './components/IntervalTimer';
import SimpleAuthForm2 from './components/SimpleAuthForm2';
import CountdownTimer from './components/CountdownTimer';
import RenderWithTimer from './components/RenderWithTimer';
import RenderWithTimer2 from './components/RenderWithTimer2';
import AddItem from './components/AddItem';
import ApiCall from './components/ApiCall';
import ClearInputRef from './components/ClearInputRef';

// useRef just like useState persists a value across renders
// but unlike useState it does not trigger a re-render of
// the component.

// ref is a plain JavaScript object
// it memoizes this ref so that it stays
// persistent across multiple renders of the component.

// memoization is a technique that where, whenever the parent
// component re-renders, the child component re-renders only
// if there's a change in the props
function App() {
	return (
		<div className="App">
			<h1>Understanding useRef() in-depth, compare with useState() </h1>
			<InputStateExample />
			<br />
			<br />
			<br />
			<SimpleAuthForm />
			<br />
			<br />
			<br />
			<IntervalTimer />
			{/* <SimpleAuthForm2 /> */}
			<br />
			<br />
			<br />
			<CountdownTimer />
			<br />
			<br />
			<br />
			<RenderWithTimer />
			<br />
			<br />
			<br />
			<AddItem />
			<br />
			<br />
			<br />
			<ApiCall />
			<br />
			<br />
			<br />
			<ClearInputRef />
		</div>
	);
}

export default App;
