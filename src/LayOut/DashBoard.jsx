import React from 'react';
import { FaBackward, FaBook, FaCalendarAlt, FaHome, FaPlus, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {

    const isAdmin = true
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-orange-500">
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 w-80 min-h-full  text-white">
                    {/* Sidebar content here */}

                    {
                        isAdmin ?
                            <>
                                <li><Link to='userHome'> <FaHome></FaHome> Admin Home</Link></li>
                                <li><Link to='reservation'> <FaPlus></FaPlus> Add Categories</Link></li>
                                <li><Link to='reservation'> <FaBook></FaBook> Manage Bookings</Link></li>
                                <li><Link to='allUsers'> <FaUser></FaUser> All Users</Link></li>
                                <div className='divider'></div>
                                <li><Link to='/'> <FaBackward></FaBackward> Back to Home</Link></li>
                            </> :

                            <>
                                <li><Link to='userHome'> <FaHome></FaHome> User Home</Link></li>
                                <li><Link to='reservation'> <FaCalendarAlt></FaCalendarAlt> Reservation</Link></li>
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