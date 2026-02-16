import React, { useState } from 'react'
import Light from './Light'
import "./TrafficLight.css"


function TrafficLight() {
  const [selectedColor, setSelectedColor] = useState("red");
  const colors = ["red","goldenRod","green"]
  const changeColor = () => {
    const currentColor = colors.indexOf(selectedColor)
    const nextColor = (currentColor + 1) % colors.length
    setSelectedColor(colors[nextColor])
  }

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
        <button className='btnChange' onClick={changeColor}>
            Cambiar Color
        </button>
      </div>
    </>
  )
}

export default TrafficLight;
