import data from '../data';
import './Movies.scss';
import { Link } from 'react-router-dom';

const Movies = () => {
    return (
        <div className="movies">
            {data.map(({ id, image, title }) => {
                return (
                    <div className="film-box" key={id}>
                        <img src={image}></img>
                        <h3>{title}</h3>
                        <Link to={`/all-movies/${id}`}>Vice informací</Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Movies;
