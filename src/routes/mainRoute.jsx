import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { LoginSignup } from "../pages/loginSignup"

export const MainRoutes=()=>{

    return(
        <Routes>
            <Route path="/"   element={<Home/>} />
            <Route path=""   element={<div>'1234'</div>} />
            <Route path="/loginsignup"   element={<LoginSignup/>} />
        </Routes>
    )
}