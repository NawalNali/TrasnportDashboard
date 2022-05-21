import React from 'react'
import './WidgetL.css'

export default function WidgetL() {

  const Button = ({type}) => {
    return <button className= {'tableButton ' + type}>{type}</button>
  };

  return (
    <div className='WidgetL'>
      <h3 className='title'>Least Alerts</h3>
      
      <table className="table">
        <tr className="tablerow">
          <th className="tablehead">Name</th>
          <th className="tablehead">ID</th>
          <th className="tablehead">Date</th>
          <th className="tablehead">Status</th>
        </tr>
        <tr className="tablerow">
          <td className="tableName">
            Ahmad Rishi
          </td>
          <td className="tableID">4180172</td>
          <td className="tableDate">15/05/2022</td>
          <td>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className="tablerow">
          <td className="tableName">
            Ahmad Rishi
          </td>
          <td className="tableID">4180172</td>
          <td className="tableDate">15/05/2022</td>
          <td>
            <Button type='Pending' />
          </td>
        </tr>
        <tr className="tablerow">
          <td className="tableName">
            Ahmad Rishi
          </td>
          <td className="tableID">4180172</td>
          <td className="tableDate">15/05/2022</td>
          <td>
            <Button type='Declined' />
          </td>
        </tr>
      </table>
    </div>
  )
}
