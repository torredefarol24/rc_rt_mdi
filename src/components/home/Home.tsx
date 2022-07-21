import { useEffect, useState } from "react";
export function Home(props: any) {
	const landedTime = props.timestamp;
	const [timestamp, setTimestamp] = useState<String>(props.timestamp);

	useEffect(() => {
		setTimeout(() => {
			setTimestamp(new Date().toISOString());
		}, 1000);
	}, [timestamp]);

	return (
		<div className="container">
			<h1 className="display-1">Home</h1>
			<h1 className="display-3">
				<small>Landed on </small> {landedTime}
			</h1>
			<h1 className="display-3">
				<small>Going until</small> {timestamp}
			</h1>
		</div>
	);
}
