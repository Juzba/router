import { Link } from 'react-router-dom';

const Serials = () => {
    return (
        <section>
            <h2>Serials</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/movies'>Movie</Link></li>
                <li>Serials</li>
            </ul>
        </section>
    );
};

export default Serials;
