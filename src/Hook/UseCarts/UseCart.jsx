import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../LoginInfo/AuthProvider/AuthProvider';

const UseCart = () => {

    const {user} = useContext(AuthContext)
    const { refetch, data: cart=[] } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            
            return response.json()
          },
      })
    return [cart,refetch]
};

export default UseCart;