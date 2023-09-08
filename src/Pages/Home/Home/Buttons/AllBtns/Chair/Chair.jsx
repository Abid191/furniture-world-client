import React from 'react';
import UseCategory from '../../../../../../Hook/UseCategory/UseCategory';
import AllCategory from '../AllCategory/AllCategory';

const Chair = () => {
    const [item] = UseCategory()

    const Chair = item.filter(item => item.category === 'Chair')
    return (
        <div>
            <AllCategory items={Chair}></AllCategory>
        </div>
    );
};

export default Chair;