import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { LoginSignup } from "../pages/loginSignup"
import { AddpostMobile } from "../components/addpostMobile"
import { Profile } from "../pages/profile"

export const MainRoutes=()=>{
    return(
        <Routes>
            <Route path="/"element={<Home/>} />
            <Route path="/loginsignup"   element={<LoginSignup/>} />
            <Route path="/profile/:username"   element={<Profile/>} />
        </Routes>
    )
}