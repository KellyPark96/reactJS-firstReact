import { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [cost, setCost] = useState("Select:");
	const [count, setCount] = useState(1);
	const onChange = (event) => {
		setCost(event.target.value);
		setCount(1);
	};
	const onInputHandle = (event) => setCount(event.target.value);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				console.log(json.slice(0, 30));
				setCoins(json);
				setLoading(false);
			});
	}, []);
	return (
		<div>
			<h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
			{loading ? (
				<strong>loading...</strong>
			) : (
				<select onChange={onChange}>
					<option>Select: </option>
					{coins.map((coin, index) => (
						<option
							key={index}
							value={coin.quotes.USD.price}
							id={coin.symbol}
						>
							{coin.name}({coin.symbol}) : $
							{coin.quotes.USD.price}
						</option>
					))}
				</select>
			)}
			<hr />
			{cost === "Select:" ? null : (
				<div>
					<input
						type="number"
						value={count}
						onChange={onInputHandle}
					/>
					<h5>You can buy {Math.floor(count / cost)}</h5>
				</div>
			)}
		</div>
	);
}
export default App;
