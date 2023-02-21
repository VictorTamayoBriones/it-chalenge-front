import { PUBLIC_ROUTES } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export const AuthGuard = () =>{
    const accessToken = useSelector((store:AppStore)=>store.user.access_token);
    return accessToken ? <Outlet/> : <Navigate to={ PUBLIC_ROUTES.LOGIN } />
}