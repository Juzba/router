import data from "../data";
import "./Movies.scss";
import { Link } from "react-router-dom";

const Movies = () => {
	return (
		<div className="movies">
			{data.map(({ id, image, title, age, tags, description }) => {
				return (
					<Link to={`/all-movies/${id}`} className="film-box" key={id}>
						<img src={image}></img>
						<h3>{title}</h3>
						<p>{age}</p>
						<p>{tags}</p>
						<p>{description}</p>
					</Link>
				);
			})}
		</div>
	);
};

export default Movies;
