import { useQuery } from '@tanstack/react-query'
import { FaUser } from 'react-icons/fa';
const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/users')

            return response.json()
        },
    })



    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH',
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch()
                alert(`${user.name} is an Admin Now!`)
            }
        })
    }
    const handleDelete = user => {
        fetch(`http://localhost:5000/users/${user._id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
            if(data.deletedCount>0){
                alert('Delete Confirm')
            }
        })
    }
    return (
        <div>

            <div>
                <div className='uppercase font-bold text-center text-2xl'>
                    <h1>total-item: {users.length}</h1>
                </div>
                <div className="overflow-x-auto mt-10">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td> {user.role === 'admin' ? 'admin' :
                                        
                                        <button className='btn btn-circle btn-sm btn-outline' onClick={() => handleMakeAdmin(user)}><FaUser></FaUser></button>
                                        } </td>

                                        <td><button onClick={() => handleDelete(user)} className="btn btn-circle btn-sm btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;