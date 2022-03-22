import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import DetailMovie from "../components/DetailMovie";
import styles from "./Detail.module.css";

function Detail() {
	const { id } = useParams(); // url을 동적으로 만들어줄 id
	const [loading, setLoading] = useState(true);
	const [datas, setDatas] = useState({});
	const getMovie = useCallback(async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
			)
		).json();
		console.log(json.data.movie);
		setDatas(json.data.movie);
		setLoading(false);
	}, [id]);
	useEffect(() => {
		getMovie();
	}, [getMovie]);

	return (
		<div>
			{loading ? (
				<div className={styles.loader}>
					<span>Loading...</span>
				</div>
			) : (
				<div>
					<DetailMovie
						cover_image={datas.medium_cover_image}
						description_intro={datas.description_intro}
						genres={datas.genres}
						rating={datas.rating}
						runtime={datas.runtime}
						title={datas.title}
						year={datas.year}
					/>
				</div>
			)}
		</div>
	);
}

export default Detail;
