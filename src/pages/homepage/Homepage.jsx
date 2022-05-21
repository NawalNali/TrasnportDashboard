import React from 'react'
import './Homepage.css'

import Boxinfo from '../../components/boxinfo/Boxinfo'
import Chart from '../../components/chart/Chart'
import {data} from '../../dummydata'
import WidgetL from '../../components/widgets/large/WidgetL'
import WidgetS from '../../components/widgets/small/WidgetS'

export default function Homepage() {
  return (
    <div className='homepage'>
      <Boxinfo />
      <Chart title="Title" data={data} grid datakey="name" />
      <div className="homeWidgets">
        <WidgetS />
        <WidgetL />
      </div>
    </div>
  )
}
