import React from 'react';
import { Link } from 'react-router-dom';

const ImgCategory = () => {
    return (
        <div className='mt-14 bg-slate-200 pb-10'>
            <div className='text-center pt-14'>
                <h2 className='text-3xl text-slate-600'>Buy Furniture Based on Space</h2>
                <p className='text-slate-500 mt-2'>Every Space has its unique needs.</p>
            </div>
            <div className='mt-16 md:w-9/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 text-center'>
                <Link to="/readingTable">
                    <div className="card space-y-2 ">
                            <img src="/src/assets/Reading Table/1.jpg" alt="" className="h-80 md:px-0 p-8" />
                            <h2 className='mb-5 text-2xl'>Reading Table</h2>
                            <Link className='text-orange-700' to="/readingTable">
                                <button className='btn bg-orange-400 hover:bg-black  text-white'>Explore Now</button>
                            </Link>
                    </div>
                </Link>
                <Link to="bed">
                    <div className="card space-y-2 ">
                            <img src="/src/assets/Bed/1.jpg" alt="" className="h-80 md:px-0 p-8" />
                            <h2 className='mb-5 text-2xl'>Bed</h2>
                            <Link className='text-orange-700' to="bed">
                                <button className='btn bg-orange-400 hover:bg-black text-white'>Explore Now</button>
                            </Link>
                    </div>
                </Link>
                <Link to="chair">
                    <div className="card space-y-2 ">
                            <img src="/src/assets/Chair/5.jpg" alt="" className="h-80 md:px-0 p-8" />
                            <h2 className='mb-5 text-2xl'>Chair</h2>
                            <Link className='text-orange-700' to="chair">
                                <button className='btn bg-orange-400 hover:bg-black text-white'>Explore Now</button>
                            </Link>
                    </div>
                </Link>
                <Link to="diningChair">
                    <div className="card space-y-2 ">
                            <img src="/src/assets/Dining Chiar/2.jpg" alt="" className="h-80 md:px-0 p-8" />
                            <h2 className='mb-5 text-2xl'>Dining Chair</h2>
                            <Link className='text-orange-700' to="diningChair">
                                <button className='btn bg-orange-400 hover:bg-black text-white'>Explore Now</button>
                            </Link>
                    </div>
                </Link>
                <Link to="diningTable">
                    <div className="card space-y-2 ">
                            <img src="/src/assets/Dining Table/2.jpg" alt="" className="h-80 md:px-0 p-8" />
                            <h2 className='mb-5 text-2xl'>Dining Table</h2>
                            <Link className='text-orange-700' to="diningTable">
                                <button className='btn bg-orange-400 hover:bg-black text-white'>Explore Now</button>
                            </Link>
                    </div>
                </Link>
                <Link to="door">
                    <div className="card space-y-2 ">
                            <img src="/src/assets/Door/4.jpg" alt="" className="h-80 md:px-0 p-8" />
                            <h2 className='mb-5 text-2xl'>Door</h2>
                            <Link className='text-orange-700' to="door">
                                <button className='btn bg-orange-400 hover:bg-black text-white'>Explore Now</button>
                            </Link>
                    </div>
                </Link>
                <Link to="kitchen">
                    <div className="card space-y-2 ">
                            <img src="/src/assets/Kitchen/2.jpg" alt="" className="h-80 md:px-0 p-8" />
                            <h2 className='mb-5 text-2xl'>Kitchen</h2>
                            <Link className='text-orange-700' to="kitchen">
                                <button className='btn bg-orange-400 hover:bg-black text-white'>Explore Now</button>
                            </Link>
                    </div>
                </Link>
                <Link to="sofa">
                    <div className="card space-y-2 ">
                            <img src="/src/assets/Sofa/1.jpg" alt="" className="h-80 md:px-0 p-8" />
                            <h2 className='mb-5 text-2xl'>Sofa</h2>
                            <Link className='text-orange-700' to="sofa">
                                <button className='btn bg-orange-400 hover:bg-black text-white'>Explore Now</button>
                            </Link>
                    </div>
                </Link>
                <Link to="wardrobe">
                    <div className="card space-y-2 ">
                            <img src="/src/assets/Wardrobe/1.jpg" alt="" className="h-80 md:px-0 p-8" />
                            <h2 className='mb-5 text-2xl'>Wardrobe</h2>
                            <Link className='text-orange-700' to="wardrobe">
                                <button className='btn bg-orange-400 hover:bg-black text-white'>Explore Now</button>
                            </Link>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default ImgCategory;