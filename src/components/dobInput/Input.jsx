import React from 'react'

export default function Input({className, onchange}) {

    var currentYear = new Date().getFullYear();
    var min = currentYear - 60;
    var max = currentYear - 18;
    
  return (
    <div className='input'>
        <input type="date" min={min + "-01-01"} max={max + "-12-31"} className={className} onChange={onchange}/>
    </div>

    
  )
}
