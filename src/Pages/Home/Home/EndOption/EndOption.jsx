import React from 'react';
import { FaSearch } from 'react-icons/fa';

const EndOption = () => {
    return (
        <div>
            <div className='text-center mt-20 '>
                <small><p className='text-slate-500'>Special Offers For Subscribers</p></small>
                <h2 className='text-2xl font-semibold'>Member Discount</h2>
                <p className='text-slate-500 mt-5'>Subscribe to our newsletters now and stay up to date with new collections, the latest look books and exclusive offers.</p>
                
            </div>
            <div className="input-group mt-5">
                    <div className='mx-auto '>
                        <input type="text" placeholder="Subscribe…" className="input input-bordered w-80" />
                        <button className="btn btn-square ">
                            <FaSearch></FaSearch>
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default EndOption;