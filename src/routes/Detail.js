import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Point from "../components/Point";
import styles from "./Home.module.css";
import Loading from "../components/Loading";

function Detail() {
	const { id } = useParams(); // url을 동적으로 만들어줄 id
	const [loading, setLoading] = useState(true);
	const [datas, setDatas] = useState({});
	useEffect(() => {
		fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
			.then((response) => response.json())
			.then((json) => {
				setDatas(json.data.movie);
				setLoading(false);
			});
	}, [id]);
	console.log(datas);
	return (
		<div class={styles.container}>
			{loading ? (
				<Loading />
			) : (
				<Point
					background_image_original={datas.background_image_original}
					medium_cover_image={datas.medium_cover_image}
					title={datas.title}
					title_long={datas.title_long}
					rating={datas.rating}
					runtime={datas.runtime}
					genres={datas.genres}
				/>
			)}
		</div>
	);
}

export default Detail;
