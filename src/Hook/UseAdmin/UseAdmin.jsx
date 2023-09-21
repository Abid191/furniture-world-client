import { useContext } from "react";
import { AuthContext } from "../../LoginInfo/AuthProvider/AuthProvider";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";



const UseAdmin = () => {

    const {user} = useContext(AuthContext)
    const {data: isAdmin , isLoading: isAdminLoading } = useQueries({
        queryKey: ['isAdmin',user?.email],
        queryFn: async()=>{
            const response = await axios(`http://localhost:5000/users/admin/${user?.email}`)
              return response.json()
        }
        
    })
    return [isAdmin,isAdminLoading]
};

export default UseAdmin;