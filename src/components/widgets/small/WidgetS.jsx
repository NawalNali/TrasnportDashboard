import React from 'react'
import './WidgetS.css'
import {List, Done} from '@mui/icons-material'

export default function WidgetS() {
  return (
    <div className='WidgetS'>
        <div className="head">
        <List className="titleLogo" />
        <span className="title">Least Complains</span>
        </div>
        <ul className="list">
            <li className="listItem">
                <div className="task">
                <span className="taskName">[Student Name]</span>
                <span className="taskDate">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</span>
                </div>
                <button className="button"> 
                <Done className='buttonIcon'/>
                </button>
            </li>
            <li className="listItem">
                <div className="task">
                <span className="taskName">[Student Name]</span>
                <span className="taskDate">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</span>
                </div>
                <button className="button"> 
                <Done className='buttonIcon'/>
                </button>
            </li>
            <li className="listItem">
                <div className="task">
                <span className="taskName">[Student Name]</span>
                <span className="taskDate">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</span>
                </div>
                <button className="button"> 
                <Done className='buttonIcon'/>
                </button>
            </li>
           
            
            
        </ul>
    </div>
  )
}
