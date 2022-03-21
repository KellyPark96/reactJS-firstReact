import PropTypes from "prop-types";

function DetailMovie({
	cover_image,
	description_intro,
	genres,
	rating,
	runtime,
	title,
	year,
}) {
	return (
		<div>
			<img src={cover_image} alt={title} />
			<h1>{title}</h1>
			<h3>
				rating : <span>{rating}</span>
			</h3>
			<h3>
				runtime : <span>{runtime}</span>
			</h3>
			<h3>
				year : <span>{year}</span>
			</h3>
			<ul>
				<h3>genres : </h3>
				{genres && genres.map((genre) => <li key={genre}>{genre}</li>)}
			</ul>
			<div>
				<h3>description : </h3>
				<p>{description_intro}</p>
			</div>
		</div>
	);
}

DetailMovie.propTypes = {
	cover_image: PropTypes.string.isRequired,
	description_intro: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	rating: PropTypes.number.isRequired,
	runtime: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
};

export default DetailMovie;
