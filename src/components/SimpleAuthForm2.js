import React, { useEffect, useRef } from 'react';

function SimpleAuthForm2() {
	const emailRef = useRef('');
	const passwordRef = useRef('');
	let tag;
	useEffect(() => {
		emailRef.current.focus();
	}, []);

	const handleFormSubmission = (event) => {
		event.preventDefault();
		const inputEmail = emailRef.current.value;
		const inputPassword = passwordRef.current.value;
		console.log(`email : ${inputEmail}`);
		console.log(`password : ${inputPassword}`);
		// let tags

		inputEmail &&
			inputPassword &&
			(tag = (
				<div>
					<h3>{`email : ${emailRef.current.value}`}</h3>
				</div>
			));
	};

	return (
		<form onSubmit={handleFormSubmission}>
			<input type="email" name="email" ref={emailRef} />
			<input type="password" name="password" ref={passwordRef} />
			<button>Register</button>
			<br />
			{tag && tag}
		</form>
	);
}

export default SimpleAuthForm2;
