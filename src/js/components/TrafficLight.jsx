import React, { useState } from 'react'
import Light from './Light'
import "./TrafficLight.css"

function TrafficLight() {
  const [selectedColor, setSelectedColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  const colorsLight = ["red", "goldenRod", "green"];
  const colors = showPurple ? [...colorsLight, "purple"] : colorsLight;

  const changeColor = () => {
    const nextIndex = (colors.indexOf(selectedColor) + 1) % colors.length;
    setSelectedColor(colors[nextIndex]);
  };

  const togglePurple = () => setShowPurple(!showPurple);

  return (
    <div className='container'>
      <div className='handle'>
      </div>
      <div className='bodyTrafficLight'>
        {colors.map(color => (
          <div
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`${selectedColor === color ? "active" : ""}`}
            style={{ "--glow-color": color }}
          >
            <Light color={color} />
          </div>
        ))}

      </div>
      <div className='row mt-3'>
        <button onClick={changeColor}>
          Cambiar Color
        </button>
        <button onClick={togglePurple}>
          Mostrar / Ocultar Púrpura
        </button>
      </div>
    </div>
  )
}

export default TrafficLight;
