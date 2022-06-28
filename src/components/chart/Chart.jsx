import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Chart.css'

export default function Chart({ title, data, datakey, grid}) {
    
  return (
    <div className='chart'>
        <h3 className='chartTitle'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <BarChart data={data}>
                <XAxis dataKey={datakey} />
                <YAxis />
                <Bar dataKey='Students' fill='#8884d8' />
                <Legend />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}
