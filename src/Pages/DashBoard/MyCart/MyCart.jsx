import React from 'react';
import UseCart from '../../../Hook/UseCarts/UseCart';

const MyCart = () => {
    const [cart,refetch] = UseCart() 
    const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0)

    const handleDelete = row => {
        fetch(`http://localhost:5000/cart/${row._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                  if(data.deletedCount>0){
                    refetch()
                    alert('Are you sure to Delete')
                  }
            })
    }
    return (
        <div>
            <div className='uppercase font-bold flex justify-evenly mt-20 text-2xl'>
                <h1>total-item: {cart.length}</h1>
                <h1>total-price: ${total.toFixed(2)}</h1>
            </div>



            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> # </th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row, index)=><tr 
                                key={row._id} >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                    {row.name}
                                </td>
                                <td>
                                    {row.person}
                                </td>
                                <td>
                                    {row.payment}
                                </td>
                                <td>
                                    {row.mobile}
                                </td>
                                <td>
                                    {row.address}
                                </td>
                                <td>{row.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(row)} className="btn btn-circle btn-sm btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyCart;