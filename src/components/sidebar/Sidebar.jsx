import React from 'react'
import './Sidebar.css';
import {Home, SupervisorAccount, DirectionsBusFilled, Groups, CalendarToday, Warning, Reviews, Person } from '@mui/icons-material';

 import {
    Link
  } from "react-router-dom";

export default function Sidebar() {
    const u = window.location.pathname;
    
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" reloadDocument={true} style={{textDecoration: 'none', color: "#555"}}>
                    <li className={"sidebarListItem "} >
                        <Home className='sidebarIcon'/>
                        Home
                    </li>
                    </Link>

                    <Link to="/supervisor" reloadDocument={true} style={{textDecoration: 'none', color: "#555"}}>
                    <li className="sidebarListItem">
                        <SupervisorAccount className='sidebarIcon'/>
                        Supervisor
                    </li>
                    </Link>

                    <Link to="/conductor" reloadDocument={true} style={{textDecoration: 'none', color: "#555"}}>
                    <li className="sidebarListItem">
                        <Groups className='sidebarIcon'/>
                        Conductors
                    </li>
                    </Link>

                    <Link to="/supervisor" reloadDocument={true} style={{textDecoration: 'none', color: "#555"}}>
                    <li className="sidebarListItem">
                        <Person className='sidebarIcon'/>
                        Students
                    </li>
                    </Link>
                    <Link to="/bus" reloadDocument={true} style={{textDecoration: 'none', color: "#555"}}>
                    <li className="sidebarListItem">
                        <DirectionsBusFilled className='sidebarIcon'/>
                        Bus
                    </li>
                    </Link>
                    <Link to="/schedule" reloadDocument={true} style={{textDecoration: 'none', color: "#555"}}>
                    <li className="sidebarListItem">
                        <CalendarToday className='sidebarIcon'/>
                        Schedule
                    </li>
                    </Link>

                    <Link to="/supervisor" reloadDocument={true} style={{textDecoration: 'none', color: "#555"}}>
                    <li className="sidebarListItem">
                        <Warning className='sidebarIcon'/>
                        Alerts
                    </li>
                    </Link>

                    <Link to="/supervisor" reloadDocument={true} style={{textDecoration: 'none', color: "#555"}}>
                    <li className="sidebarListItem">
                        <Reviews className='sidebarIcon'/>
                        Complains
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
        </div>
  )
}
