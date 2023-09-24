import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react';

const CategoryItems = () => {
    const { data: furniture = [], refetch } = useQuery({
        queryKey: ['furniture'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/furniture')
            return  response.json() 
            // console.log(response)
        }
    })

    const handleDelete = category =>{
        axios.delete(`http://localhost:5000/furniture/${category._id}`)
        .then(data=>{
                alert('Delete Confirm')
                refetch()
                console.log(data)
            
        })
    }
    return (
        <div>
            <div className='uppercase text-center font-semibold text-2xl mt-10'>
                <h2>Total Items: {furniture.length}</h2>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            furniture.map((category,index) => 
                                <tr key={category._id}>
                                    <th>{index+1}</th>
                                    <td> <img className='w-10 h-10' src={category.img} alt="" /> </td>
                                    <td>{category.name} </td>
                                    <td>{category.category}</td>
                                    <td>{category.price}</td>
                                    <th>
                                    <button onClick={() => handleDelete(category)} className="btn btn-circle btn-sm btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryItems;