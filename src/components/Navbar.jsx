import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Link to={"/"}>Home</Link>
            <Link to={"/movies"}>Movies</Link>
            <Link to={"/serials"}>Serials</Link>
        </>
    );
};

export default Navbar;
