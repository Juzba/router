import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section>
            <h2>Home</h2>
            <ul>
                <li>Home</li>
                <li>
                    <Link to='/movies'>Movies</Link>
                </li>
                <li>
                    <Link to='/serials'>Serials</Link>
                </li>
            </ul>
        </section>
    );
};

export default Home;
