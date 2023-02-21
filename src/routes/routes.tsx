import { AuthGuard } from "@/Guard"
import { FourOFourn } from "@/views/FourOFourn"
import { Navigate, Route, Routes } from "react-router-dom"
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../models"
import { Login, Private } from "../views"

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={ <Navigate to={ PUBLIC_ROUTES.LOGIN } /> } />
            <Route path={ PUBLIC_ROUTES.LOGIN } element={ <Login/> } />
            <Route element={<AuthGuard/>} >
                <Route path={ `${PRIVATE_ROUTES.PRIVATE}/*` } element={ <Private/> } />
            </Route>
            <Route element={ <FourOFourn/> } />
        </Routes>
    )
}