import React from 'react';
import UseCategory from '../../../../../../Hook/UseCategory/UseCategory';
import AllCategory from '../AllCategory/AllCategory';

const ReadingTable = () => {

    const [item] = UseCategory()
    const ReadingTable = item.filter( item=> item.category === 'Reading Table')
    return (
        <div>
            <AllCategory items={ReadingTable}></AllCategory>
        </div>
    );
};

export default ReadingTable;