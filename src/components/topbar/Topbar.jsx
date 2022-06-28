import {React, useContext} from 'react'
import './Topbar.css'
import { NotificationsNone, Language, Logout } from '@mui/icons-material';
import {
    Link
  } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import axios from 'axios';
export default function Topbar() {
    const navigate = useNavigate();

    const [user, setUser] = useContext(UserContext);
    
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
            <Link to="/" reloadDocument={true} style={{textDecoration: 'none', color: "darkslategrey"}}>
                <span className="logo">Admin Panel</span>
                </Link>
            </div>
            <div className="topRight">
                
                
                <div onClick={() => {
                    setUser(null);
                    localStorage.clear();
                    axios.post("http://localhost/panelApi/logout");
                    navigate('/login', {replace: true});
                }} className="topbarIconContainer">
                    
                    <Logout />
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}
