import { Link } from 'react-router-dom';

const Movies = () => {
    return (
        <section>
            <h2>Movies</h2>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>Movies</li>
                <li>
                    <Link to='/serials'>Serials</Link>
                </li>
            </ul>
        </section>
    );
};

export default Movies;
