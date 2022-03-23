import PropTypes from "prop-types";
import styles from "./Point.module.css";

function Point({
	background_image_original,
	medium_cover_image,
	title,
	title_long,
	rating,
	runtime,
	genres,
}) {
	return (
		<div>
			<img
				className={styles.bg}
				src={background_image_original}
				alt={title}
			/>
			<div className={styles.contents}>
				<img
					className={styles.posterImage}
					src={medium_cover_image}
					alt={title}
				/>
				<div className={styles.textbox}>
					<h1 className={styles.title}>{title_long}</h1>
					<ul>
						<li>Rating {rating}</li>
						<li>Runtime {runtime}</li>
						<li>
							Genres
							<ul>
								{genres &&
									genres.map((genre) => (
										<li key={genre}>{genre}</li>
									))}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

Point.propTypes = {
	title: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	runtime: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Point;
