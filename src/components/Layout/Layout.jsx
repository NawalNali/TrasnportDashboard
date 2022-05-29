import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"
import Topbar from "../topbar/Topbar"
import './Layout.css'
const Layout = () => {
    return (
        <div >
            <Topbar />
        <div className="App">
            
            <Sidebar />
            <Outlet />
        </div>
        </div>
    )
}

export default Layout