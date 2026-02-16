import React from 'react'
import "./Light.css"

function Light({color}) {
  return (
    <div className='spotlight' style={{backgroundColor: color}}>
    </div>
  )
}

export default Light;
