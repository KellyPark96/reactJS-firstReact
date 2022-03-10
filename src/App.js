import { useState, useEffect } from "react";
// import Button from "./Button";
// import styles from "./App.module.css";

function App() {
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setValue((prev) => prev + 1);
	const onChange = (event) => setKeyword(event.target.value);

	console.log("I run all the time");

	useEffect(() => {
		console.log("I run only once.");
	}, []);

	// useEffect(() => {
	// 	if (keyword !== "" && keyword.length > 5) {
	// 		console.log("I run when 'keyword' changes", keyword);
	// 	}
	// }, [keyword]);
	useEffect(() => {
		console.log("I run when 'keywor & counter' changes");
	}, [keyword, counter]);
	// 즉, useEffect는 component가 시작되는 시작점이나,
	// 무언가가 update될때만 코드를 실행할 수 있음.

	return (
		<div>
			<input
				value={keyword}
				onChange={onChange}
				type="text"
				placeholder="Search here..."
			/>
			<h1>{counter}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
}
export default App;
