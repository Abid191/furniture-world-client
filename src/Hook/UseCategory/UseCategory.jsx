import React, { useEffect, useState } from 'react';

const UseCategory = () => {
    
    const [item,setItem] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        fetch('http://localhost:5000/furniture')
        .then(res=> res.json())
        .then(data=> {
            setItem(data)
            setLoading(false)
        })
    },[])
    
   

    return [item]
};

export default UseCategory;