import React, { useContext } from 'react';
import { FaBeer, FaFacebook, FaInstagram, FaPhone, FaShoppingCart, FaTelegram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../LoginInfo/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    return (
        <div className=' -top-52 sticky z-10 bg-opacity-60'>
            <div className="navbar bg-base-100 md:w-9/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-4 gap-y-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="" className='hover:text-orange-600'> New </Link>
                            <Link to="" className='hover:text-orange-600'> Living </Link>
                            <Link to="" className='hover:text-orange-600'> Bedroom </Link>
                            <Link to="" className='hover:text-orange-600'> Dining </Link>
                            <Link to="" className='hover:text-orange-600'> Kitchen </Link>
                            <Link to="" className='hover:text-orange-600'> Kid'sRoom </Link>
                            <Link to="" className='hover:text-orange-600'> SmartFit </Link>
                            <Link to="" className='hover:text-orange-600'> Institutional </Link>
                            <Link to="" className='hover:text-orange-600'> Door</Link>
                            <Link to="" className='hover:text-orange-600'> Interior </Link>
                            <Link to="" className='hover:text-orange-600'> Office </Link>
                        </ul>
                    </div>
                    <div className='navbar-center  lg:flex hidden'>
                        <small><p className="normal-case flex items-center gap-2 text-slate-600"> <span>
                            <FaPhone />
                        </span> 01790374565</p></small>
                        {/* <small><p className='text-slate-600'> <span className='text-orange-700'>Email :</span> AbidHasan5612@gmail.com</p></small> */}
                    </div>
                    {/* 2nd */}

                </div>
                <div className="navbar-center  lg:flex hidden">
                    <ul className="menu menu-horizontal px-1">

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-5'>
                        <Link> <FaFacebook /> </Link>
                        <Link> <FaTwitter /> </Link>
                        <Link> <FaInstagram /> </Link>
                        <Link> <FaTelegram /> </Link>
                    </div>

                    {/* 2nd  */}

                </div>

            </div>
            <div className='divider md:w-9/12 mx-auto bg-orange-400'></div>
            <div className='md:w-9/12 mx-auto flex justify-between md:p-0 px-7 '>
                <div>
                    <Link to='/'><h2 className='md:text-2xl font-bold'>Furniture World</h2></Link>
                </div>
                <div className='flex items-center gap-5'>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className=' font-bold'>

                        {user?.email ? <>

                            <li><button onClick={handleLogOut} className='btn btn-active btn-neutral'>Log out</button></li>
                        </> :
                            <Link to="login"> <button className='btn btn-active btn-neutral'>Login</button> </Link>
                        }
                    </div>
                </div>
            </div>

            <div className='divider md:w-9/12 mx-auto bg-orange-400'></div>


            {/* button  */}

            <div className=''>
                <div className='md:w-9/12 mx-auto hidden md:block'>
                    <div className='flex md:gap-12 bg-white p-3'>
                        <Link to="new" className='hover:text-orange-600'> New </Link>
                        <Link to="readingTable" className='hover:text-orange-600'> Reading  Table </Link>
                        <Link to="diningChair" className='hover:text-orange-600'> Dining  Chair </Link>
                        <Link to="diningTable" className='hover:text-orange-600'> Dining  Table </Link>
                        <Link to="kitchen" className='hover:text-orange-600'> Kitchen </Link>
                        <Link to="chair" className='hover:text-orange-600'> Chair </Link>
                        <Link to="babyTable" className='hover:text-orange-600'> Baby  Table </Link>
                        <Link to="wardrobe" className='hover:text-orange-600'> Wardrobe </Link>
                        <Link to="door" className='hover:text-orange-600'> Door</Link>
                        <Link to="sofa" className='hover:text-orange-600'> Sofa </Link>
                        <Link to="bed" className='hover:text-orange-600'> Bed </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;