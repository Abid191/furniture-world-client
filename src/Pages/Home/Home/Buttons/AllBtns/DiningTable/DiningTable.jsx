import React from 'react';
import UseCategory from '../../../../../../Hook/UseCategory/UseCategory';
import AllCategory from '../AllCategory/AllCategory';

const DiningTable = () => {
    const [item] = UseCategory()

    const DiningTable = item.filter(item => item.category === 'Dining Table')
    return (
        <div>
            <AllCategory items={DiningTable}></AllCategory>
        </div>
    );
};

export default DiningTable;