import React from 'react';
import { Link } from 'react-router-dom';

const AllCategoryItem = ({ item }) => {
    const { name, img, price, _id } = item
    

    return (
        <div className='mx-auto'>
            <div className="card w-80  bg-slate-200 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-full h-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <p className="font-bold">{name}</p>
                    <p className='text-orange-400'>{price}</p>
                    <div className="card-actions">
                        <Link to={`/orderPage/${_id}`}><button className="btn btn-primary">Order Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCategoryItem;