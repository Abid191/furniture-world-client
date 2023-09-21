import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../LoginInfo/AuthProvider/AuthProvider';

const AdminHook = () => {

    const {user} = useContext(AuthContext)
    const { refetch, data: isAdmin } = useQuery({
        queryKey: ['isAdmin',user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
            
            return response.json()
          },
      })
    return [isAdmin,refetch]
};

export default AdminHook;