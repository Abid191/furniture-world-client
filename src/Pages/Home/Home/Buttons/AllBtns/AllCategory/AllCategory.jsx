import React, { useEffect, useState } from 'react';
import AllCategoryItem from '../AllCategoryItem/AllCategoryItem';
import UseCategory from '../../../../../../Hook/UseCategory/UseCategory';

const AllCategory = ({items}) => {   
    return (
        <div className='mt-16 md:w-9/12 md:mx-auto  '>
            <div className=' grid md:grid-cols-3 grid-cols-1 gap-y-10'>
                {
                    items.map( item=> <AllCategoryItem
                    key={item._id}
                    item={item}
                    ></AllCategoryItem>)
                }
            </div>
        </div>
    );
};

export default AllCategory;