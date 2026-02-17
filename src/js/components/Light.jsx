import React from 'react'
import "./Light.css"

function Light({ color }) {
  return (
    <div 
      className='spotlight' 
      style={{ backgroundColor: color, color: color }}>
    </div>
  )
}

export default Light;
