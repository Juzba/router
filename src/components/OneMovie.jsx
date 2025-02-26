import { useParams } from "react-router-dom";
import data from "../data";

const OneMovie = () => {
	const { movieId } = useParams();

	const newData = data.find(({ id }) => id == movieId);

    	return newData ? (
		<div>
			<h1>One Film</h1>
			<img src={newData.image}></img>
			<h3>{newData.title}</h3>
			<p>{newData.age}</p>
			<p>{newData.tags}</p>
			<p>{newData.description}</p>
		</div>
	) : (
		<h2>Film nenalezen</h2>
	);
};

export default OneMovie;
