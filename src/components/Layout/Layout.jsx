import { useEffect } from "react"
import { useContext } from "react"
import { Outlet, Navigate, useNavigate } from "react-router-dom"
import { UserContext } from "../../UserContext"
import Sidebar from "../sidebar/Sidebar"
import Topbar from "../topbar/Topbar"
import './Layout.css'

const Layout = () => {
    const [ user, setUser ] = useContext(UserContext);
    
    useEffect(() => {
        localStorage.getItem("user");
        
    }, [])

    useEffect(() => {
        localStorage.setItem("user", user);
    }, [user, setUser]);

    return (

        localStorage.getItem("user")  ? 
        <div >
             <Topbar /> 
        <div className="App">
            
            <Sidebar /> 
            <Outlet />
        </div> 
        </div>
    :
    <Navigate to="/login" replcae />
    )
}

export default Layout