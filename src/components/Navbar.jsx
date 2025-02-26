import { NavLink } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink className={({isActive})=> isActive ? "activeLink link" : "nonActive link"} to={"/"}>Home</NavLink>
            <NavLink className={({isActive})=> isActive ? "activeLink link" : "nonActive link"} to={"/movies"}>Movies</NavLink>
            <NavLink className={({isActive})=> isActive ? "activeLink link" : "nonActive link"} to={"/serials"}>Serials</NavLink>
            {/* <NavLink className={({isActive})=> isActive ? "activeLink link" : "nonActive link"} to={"/all-movies"}>All Movies</NavLink> */}
        </nav>
    );
};

export default Navbar;
