import React from 'react';
import UseCategory from '../../../../../../Hook/UseCategory/UseCategory';
import AllCategory from '../AllCategory/AllCategory';

const Wardrobe = () => {
    const [item] = UseCategory()

    const Wardrobe = item.filter(item => item.category === 'Wardrobe')
    return (
        <div>
            <AllCategory items={Wardrobe}></AllCategory>
        </div>
    );
};

export default Wardrobe;