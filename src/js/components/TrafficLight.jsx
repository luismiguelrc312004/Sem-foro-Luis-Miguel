import React, { useState } from 'react'
import Light from './Light'
import "./TrafficLight.css"



function TrafficLight() {
  const [selectedColor, setSelectedColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  const togglePurple = () => {
    setShowPurple(prev => !prev);
  };

  const colors = showPurple
    ? ["red", "goldenRod", "green", "purple"]
    : ["red", "goldenRod", "green"];

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
          {showPurple && (
            <div
              onClick={() => setSelectedColor("purple")}
              className={selectedColor === "purple" ? "glowPurple" : ""}
            >
              <Light color="purple" />
            </div>
          )}

        </div>
        <div className='row mt-3'>
          <button className='btnChange' onClick={changeColor}>
            Cambiar Color
          </button>
          <button className='btnChange' onClick={togglePurple}>
            Mostrar / Ocultar Púrpura
          </button>
        </div>

      </div>
    </>
  )
}

export default TrafficLight;