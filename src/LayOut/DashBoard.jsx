import React, { useContext } from 'react';
import { FaBackward, FaBook, FaCalendarAlt, FaHome, FaPlus, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../LoginInfo/AuthProvider/AuthProvider';
import AdminHook from '../Hook/AdminHook/AdminHook';

const DashBoard = () => {

    const {loading } = useContext(AuthContext)
    
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    const [isAdmin] = AdminHook()
    
    let myAdmin = false
     if(isAdmin?.role === 'admin'){
        myAdmin=true
     } 
     else{
        myAdmin=false
     }

    return (
        <div className="drawer lg:drawer-open bg-sky-300">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn  btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}

                    {
                        myAdmin ?
                            <>
                                <li><Link to='/dashboard/adminHome'> <FaHome></FaHome> Admin Home</Link></li>
                                <li><Link to='addCategory'> <FaPlus></FaPlus> Add Categories</Link></li>
                                <li><Link to='categoryItem'> <FaBook></FaBook> Category Items</Link></li>
                                <li><Link to='allUsers'> <FaUser></FaUser> All Users</Link></li>
                                <div className='divider'></div>
                                <li><Link to='/'> <FaBackward></FaBackward> Back to Home</Link></li>
                            </> :

                            <>
                                <li><Link to='/dashboard/userHome'> <FaHome></FaHome> User Home</Link></li>
                                <li><Link to='mycart'> <FaShoppingCart></FaShoppingCart>My Cart</Link></li>
                                <div className='divider'></div>
                                <li><Link to='/'> <FaBackward></FaBackward> Back to Home</Link></li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;