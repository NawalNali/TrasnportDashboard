import React, { useState } from 'react'
import './Homepage.css'

import Boxinfo from '../../components/boxinfo/Boxinfo'
import Chart from '../../components/chart/Chart'

import WidgetL from '../../components/widgets/large/WidgetL'
import WidgetS from '../../components/widgets/small/WidgetS'
import { useEffect } from 'react'
import axios from 'axios'

export default function Homepage() {

  const [route, setRoute] = useState([]);
  const [student, setStudent] = useState([]);


/*
  useEffect(() => {
    axios.get('http://localhost/panelApi/getCount/route.php')
    .then(res => {
      setRoute(res?.data);
    })
  }, [])
  */

  return (
    <div className='homepage'>
      <Boxinfo />
      <Chart title="Number of Student in Each Route" data={route} grid datakey="routeName" />
  
      
    </div>
  )
}
