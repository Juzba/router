import { Link } from "react-router-dom";



const Error = () => {
    return (
        <div>
            <h2>404</h2>
            <p>Stránka nenalezena.</p>
            <Link to={"/"}>Home</Link>
        </div>
    );
};

export default Error;
