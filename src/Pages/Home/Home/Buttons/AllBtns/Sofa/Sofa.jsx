import React from 'react';
import UseCategory from '../../../../../../Hook/UseCategory/UseCategory';
import AllCategory from '../AllCategory/AllCategory';

const Sofa = () => {
    const [item] = UseCategory()

    const Sofa = item.filter(item => item.category === 'Sofa')
    return (
        <div>
            <AllCategory items={Sofa}></AllCategory>
        </div>
    );
};

export default Sofa;