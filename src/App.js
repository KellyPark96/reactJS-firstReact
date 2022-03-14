import { useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	// state를 직접 수정하면 안됨.
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (toDo === "") {
			return;
		}
		setToDo("");
	};
	console.log(toDos);
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					type="text"
					placeholder="Write your to do..."
				/>
				<button>Add To Do</button>
			</form>
		</div>
	);
}
export default App;
