import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';

const Buttons = () => {
    return (
        <div className='mt-20'>
            <div className='text-center '>
                <h2 className='text-3xl text-slate-600 '>Popular Furniture By Choice</h2>
                <p className='text-slate-500 mt-2'>Categories our customers love to check out.</p>
            </div>

            <div className='mt-16 md:w-9/12 mx-auto grid md:grid-cols-7 grid-cols-3 gap-5 text-center'>
                
                <Link to="bed">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/bed.jpg" alt="" className="" />
                            <p className='mb-5'>Bed</p>
                    </div>
                </Link>
                <Link to="bookSelf">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/bookself.jpg" alt="" className="" />
                            <p className='mb-5'>Book Self</p>
                    </div>
                </Link>
                <Link to="chair">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/chair.jpg" alt="" className="" />
                            <p className='mb-5'>Chair</p>
                    </div>
                </Link>
                <Link to="diningChair">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/dingchair.jpg" alt="" className="" />
                            <p className='mb-5'>Dining Chair</p>
                    </div>
                </Link>
                <Link to="diningTable">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/diningtable.jpg" alt="" className="" />
                            <p className='mb-5'>Dining Table</p>
                    </div>
                </Link>
                <Link to="door">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/door.jpg" alt="" className="" />
                            <p className='mb-5'>Door</p>
                    </div>
                </Link>
                <Link to="dressingTable">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/diningtable.jpg" alt="" className="" />
                            <p className='mb-5'>Dressing Table</p>
                    </div>
                </Link>
                <Link to="kitchen">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/kitchen.jpg" alt="" className="" />
                            <p className='mb-5'>Kitchen</p>
                    </div>
                </Link>
                <Link to="lamp">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/lamp.jpg" alt="" className="" />
                            <p className='mb-5'>Lamp</p>
                    </div>
                </Link>
                <Link to="living">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/living.jpg" alt="" className="" />
                            <p className='mb-5'>Living</p>
                    </div>
                </Link>
                <Link to="mirror">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/mirror.png" alt="" className="" />
                            <p className='mb-5'>Mirror</p>
                    </div>
                </Link>
                <Link to="office">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/office.jpg" alt="" className="" />
                            <p className='mb-5'>Office</p>
                    </div>
                </Link>
                <Link to="readingTable">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/reading table.jpg" alt="" className="h-36" />
                            <p className='mb-5'>Reading Table</p>
                    </div>
                </Link>
                <Link to="rockingChair">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/rocking chair.png" alt="" className="" />
                            <p className='mb-5'>Rocking Chair</p>
                    </div>
                </Link>
                <Link to="shoeTable">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/shoe table.jpg" alt="" className="" />
                            <p className='mb-5'>Shoe Table</p>
                    </div>
                </Link>
                <Link to="sideTable">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/side table.jpg" alt="" className="" />
                            <p className='mb-5'>Side Table</p>
                    </div>
                </Link>
                <Link to="sofa">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img  src="/src/assets/icons/sofa.jpg" alt="" className="h-36" />
                            <p className='mb-5'>Sofa</p>
                    </div>
                </Link>
                <Link to="teaTrolly">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/tea trolly.jpg" alt="" className="" />
                            <p className='mb-5'>Tea Trolly</p>
                    </div>
                </Link>
                <Link to="tvStand">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/tv stand.jpg" alt="" className="" />
                            <p className='mb-5'>TV Stand</p>
                    </div>
                </Link>
                <Link to="wardrobe">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/wardrobe.jpg" alt="" className="" />
                            <p className='mb-5'>Wardrobe</p>
                    </div>
                </Link>
                <Link to="babyTable">
                    <div className="card w-3/3 bg-base-100 shadow-xl transition hover:scale-105 border hover:border-orange-400 ">
                            <img src="/src/assets/icons/babytable.jpg" alt="" className="" />
                            <p className='mb-5'>Baby Table</p>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Buttons;