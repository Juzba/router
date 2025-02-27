import { Link, useParams } from "react-router-dom";
import data from "../data";
import "./OneMovie.scss"


const OneMovie = () => {
	const { movieId } = useParams();

	const newData = data.find(({ id }) => id == movieId);

    	return newData ? (
			<div className="onemovie">
			<h2>{newData.title}</h2>
			<img src={newData.image}></img>
			<p>{newData.age}</p>
			<p>{newData.tags}</p>
			<p>{newData.description}</p>
			<Link to={"/movies"}>Zpět na všechny filmy</Link>
		</div>
	) : (
		<h2>Film nenalezen</h2>
	);
};

export default OneMovie;
