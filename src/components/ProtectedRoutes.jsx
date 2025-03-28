import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes({children, redirectTo='/'}){
    let isAuth = sessionStorage.getItem('token');
    if(!isAuth){
        return <Navigate to={redirectTo}/>
    }
    return <Outlet/>
}