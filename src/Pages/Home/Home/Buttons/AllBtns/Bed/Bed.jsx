import React from 'react';
import UseCategory from '../../../../../../Hook/UseCategory/UseCategory';
import AllCategory from '../AllCategory/AllCategory';

const Bed = () => {
    const [item] = UseCategory()

    const Bed = item.filter(item => item.category === 'Bed')
    return (
        <div>
            <AllCategory items={Bed}></AllCategory>
        </div>
    );
};

export default Bed;