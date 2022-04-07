import { useState, useRef } from 'react';

function SimpleAuthForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const userToken = useRef('');

	const generateToken = () => {
		userToken.current = Math.random().toString(36);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		generateToken();
		alert(
			`Username: ${username} Password: ${password} Token: ${userToken.current}`
		);
	};

	return (
		<form onSubmit={handleLogin}>
			<label>Username:</label>
			<input
				type="text"
				name="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button>Login</button>
		</form>
	);
}

export default SimpleAuthForm;
