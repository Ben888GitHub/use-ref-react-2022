import { useRef } from 'react';

function VideoPlayer() {
	const ref = useRef();
	const handlePlay = () => {
		ref.current.pause();
	};
	const handlePause = () => {
		ref.current.pause();
	};
	return (
		<>
			<button onClick={handlePlay}>Play</button>
			<button onClick={handlePause}>Pause</button>
			<video src="" ref={ref} />
		</>
	);
}

export default VideoPlayer;
