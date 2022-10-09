import React, { useState } from 'react'
import {SupervisorAccount, Groups, Reviews, Warning} from '@mui/icons-material';
import './Boxinfo.css'
import axios from 'axios'


export default function Boxinfo() {

    const [supCount, setSupCount] = useState(() => {
        /*
        axios.get("http://localhost/panelApi/getCount/supervisor.php").
        then(res => {
            setSupCount(res.data[0][0]);
        })
        */
    });

    const [conCount, setConCount] = useState(() => {
        /*
        axios.get("http://localhost/panelApi/getCount/conductor.php").
        then(res => {
            setConCount(res.data[0][0]);
        })
        */
    });

    const [alertCount, setAlertCount] = useState(() => {
        /*
        axios.get("http://localhost/panelApi/getCount/alert.php").
        then(res => {
            setAlertCount(res.data[0][0]);
        })
        */
    });

    const [complainCount, setComplainCount] = useState(() => {
        /*
        axios.get("http://localhost/panelApi/getCount/complain.php").
        then(res => {
            setComplainCount(res.data[0][0]);
        })
        */
    });

    

  return (
    <div className='Info'>
        <div className="box">
            <span className="boxTitle">Supervisor</span>
            <div className="boxContainer">
            
            <span className="boxCount">
                {
                   supCount
                }
             </span>
                <SupervisorAccount className="boxLogo" />
            
            </div>
        </div>
        <div className="box">
            <span className="boxTitle">Conductor</span>
            <div className="boxContainer">
            
            <span className="boxCount">{conCount}</span>
                <Groups className="boxLogo" />
            
            </div>
        </div>
        <div className="box">
            <span className="boxTitle">Complains</span>
            <div className="boxContainer">
            
            <span className="boxCount">{
            complainCount}</span>
                <Reviews className="boxLogo" />
            
            </div>
        </div>
        <div className="box">
            <span className="boxTitle">Alerts</span>
            <div className="boxContainer">
            
            <span className="boxCount">{
                alertCount
            }</span>
                <Warning className="boxLogo" />
            
            </div>
        </div>
        
        
        
    </div>
  )
}
