import data from '../data';
import "./Movies.scss"

const Movies = () => {
    return (
        <div className="movies">
            {data.map(({ id, image, title, age, tags, description }) => {
                return (
                    <div className="film-box" key={id}>
                        <img src={image}></img>
                        <h3>{title}</h3>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Movies;
