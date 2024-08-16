import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

 

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return(<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>);
    }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;