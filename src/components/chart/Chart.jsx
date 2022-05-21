import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import './Chart.css'

export default function Chart({ title, data, datakey, grid}) {
    
  return (
    <div className='chart'>
        <h3 className='chartTitle'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey={datakey} stroke='#555' />
                <Line type='monotone' dataKey='uv' stroke='#555' />
                <Tooltip />
                {grid && <CartesianGrid strokeDasharray="3 3" />}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
