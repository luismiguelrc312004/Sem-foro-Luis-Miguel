import React, { useState } from 'react'
import Light from './Light'
import "./TrafficLight.css"


function TrafficLight() {
  const [selectedColor, setSelectedColor] = useState("red");


  return (
    <>
      <div className='container'>
        <div className='handle'>
        </div>
        <div className='bodyTrafficLight'>
          <div onClick={() => setSelectedColor("red")} className={(selectedColor === "red" ? "glowRed" : "")}>
            <Light color='red' />
          </div>
          <div onClick={() => setSelectedColor("goldenRod")} className={(selectedColor === "goldenRod" ? "glowGoldenRod" : "")}>
            <Light color='goldenRod' />
          </div>
          <div onClick={() => setSelectedColor("green")} className={(selectedColor === "green" ? "glowGreen" : "")}>
            <Light color='green' />
          </div>
        </div>
      </div>
    </>
  )
}

export default TrafficLight;
