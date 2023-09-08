import React from 'react';
import AllCategory from '../AllCategory/AllCategory';
import UseCategory from '../../../../../../Hook/UseCategory/UseCategory';

const BabyTable = () => {
    const [item] = UseCategory()

    const BabyTable = item.filter(item => item.category === 'Baby Table')
    return (
        <div>
            <AllCategory items={BabyTable}></AllCategory>
        </div>
    );
};

export default BabyTable;