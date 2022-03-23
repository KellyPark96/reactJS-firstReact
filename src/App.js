import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Nav from "./components/Nav";

// import List from "./router/List";
// import {
//   RecoilRoot,
//   atom,
//   selector,
//   useRecoilState,
//   useRecoilValue,
// } from 'recoil';

function App() {
	return (
		/* <RecoilRoot> */
		<Router>
			<Nav />
			<Routes>
				<Route path="/movie/:id" element={<Detail />}></Route>
				<Route
					path={process.env.PUBLIC_URL + "/"}
					element={<Home />}
				></Route>
			</Routes>
		</Router>
		/* </RecoilRoot> */
	);
}
export default App;
