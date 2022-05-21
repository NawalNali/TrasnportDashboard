import './Schedule.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Schedule() {
    const [data, setData] = useState([]);
    useEffect(() => {
        //TODO: GET REQUEST
    }, []);

    return(
        <div className='Schedule'>
            Schedule
        </div>
    )
}