import { Outlet } from 'react-router-dom'
import Navbar from './MainComps/Navbar';
import Footer from './MainComps/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout