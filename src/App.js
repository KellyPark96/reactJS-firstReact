import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/movie" element={<Detail />}></Route>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</Router>
	);
}
// BrowserRouter => #이 없음
// HashRouter => localhose:3000/# 이 붙음.
export default App;
