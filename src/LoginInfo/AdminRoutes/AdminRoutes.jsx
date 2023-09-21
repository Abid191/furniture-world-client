import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../../Hook/UseAdmin/UseAdmin";


const AdminRoutes = ({children}) => {
    
    const {user,loading} = useContext(AuthContext)
    const [isAdmin,isAdminLoading] = UseAdmin()
    const location = useLocation()

      
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    
    if(user && isAdmin){
        return children
    }
  

    return <Navigate  to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;