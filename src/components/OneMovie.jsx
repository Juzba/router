import { useParams } from 'react-router-dom';

const OneMovie = () => {
const {movieId} = useParams()

    return (
        <div>
            <h2>One Movie</h2>
            <p>{movieId}</p>
        </div>
    );
};

export default OneMovie;
