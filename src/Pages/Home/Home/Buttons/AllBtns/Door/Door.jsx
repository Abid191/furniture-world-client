import React from 'react';
import UseCategory from '../../../../../../Hook/UseCategory/UseCategory';
import AllCategory from '../AllCategory/AllCategory';

const Door = () => {
    const [item] = UseCategory()

    const Door = item.filter(item => item.category === 'Door')
    return (
        <div>
            <AllCategory items={Door}></AllCategory>
        </div>
    );
};

export default Door;