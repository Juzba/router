import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const SharedLayout = () => {
    return (
        <header>
            <nav>
                <Navbar />
                <Outlet />
                <Footer />
            </nav>
        </header>
    );
};

export default SharedLayout;
