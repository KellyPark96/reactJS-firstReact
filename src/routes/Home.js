import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Home.module.css";
import Movie from "../components/Movie";
// import Slide from "../components/Slide";
// import navList from "../atom/NavList";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div className={styles.container}>
			{loading ? (
				<Loading />
			) : (
				<div className={styles.movies}>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							cover_image={movie.medium_cover_image}
							title={movie.title}
							year={movie.year}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}
export default Home;
