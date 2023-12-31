import EndOption from '../Pages/Home/Home/EndOption/EndOption';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const LayOut = () => {
    const Location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <EndOption></EndOption>}
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default LayOut;