import React from 'react'
import './Topbar.css'
import { NotificationsNone, Language, Logout } from '@mui/icons-material';
import {
    Link
  } from "react-router-dom";
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
            <Link to="/" reloadDocument={true} style={{textDecoration: 'none', color: "darkslategrey"}}>
                <span className="logo">Admin Panel</span>
                </Link>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                
                <div onClick={() => {console.log("SSS")}} className="topbarIconContainer">
                    
                    <Logout />
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}
