import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const SharedLayout = () => {
    return (
        <header>
            <Navbar />
            <Outlet />
            <Footer />
        </header>
    );
};

export default SharedLayout;
