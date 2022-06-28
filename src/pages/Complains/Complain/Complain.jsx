import { Grid3x3, PermIdentity, Badge, AccessTime, Description, Category, ArrowBack } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Complain.css'

export default function Complain() {
    const navigate = useNavigate();
    const params = useParams();

    const [complain, setComplain] = useState({});

    useEffect(() => {
        const {id} = params;
        axios.get('http://localhost/panelApi/complains/', {
            params: {
                sid: id
            }
        }).then(res => {
            
            setComplain(res?.data);
        })
    }, []);

    
  return (
    <div className='displayComplain'>
        <div className="widgetInfo">
            <h1>Complain Information</h1>
            <div className="InfoItem">
                <Grid3x3 className='IconInfo' />
                <span>{complain.id}</span>
            </div>

        <div className="studentContainer">
            <div className='stdID'>
                <Badge className='IconInfo' />
                <span>{complain.stdID}</span>
            </div>
            <div className='stdName'>
                <PermIdentity className='IconInfo' />
                <span>{complain.stdName}</span>
            </div>

        </div>

        <div className="InfoItem">
            <AccessTime className='IconInfo' />
            <span>{complain.time}</span>
        </div>

        <div className="InfoItem">
            <Category className='IconInfo' />
            <span>{complain.type}</span>
        </div>

        <div className="InfoItem">
            <Description className='IconInfo' />
            <span>{complain.desc}</span>
        </div>
            
        <button className='updateButton' onClick={() => {
            navigate(-1, {replace:true});
        }}>
            <ArrowBack />
        </button>
        </div>
    </div>
  )
}
