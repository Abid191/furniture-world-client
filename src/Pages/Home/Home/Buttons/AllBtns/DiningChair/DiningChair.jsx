import React from 'react';
import AllCategory from '../AllCategory/AllCategory';
import UseCategory from '../../../../../../Hook/UseCategory/UseCategory';


const DiningChair = () => {
    const [item] = UseCategory()

    const DiningChair = item.filter(item => item.category === 'Dining Chair')
    return (
        <div>
            <AllCategory items={DiningChair}></AllCategory>
        </div>
    );
};

export default DiningChair;