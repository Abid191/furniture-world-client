import React from 'react';
import UseCategory from '../../../../../../Hook/UseCategory/UseCategory';
import AllCategory from '../AllCategory/AllCategory';

const Kitchen = () => {
    const [item] = UseCategory()

    const KitchenTable = item.filter(item => item.category === 'Kitchen Table')
    return (
        <div>
            <AllCategory items={KitchenTable}></AllCategory>
        </div>
    );
};

export default Kitchen;