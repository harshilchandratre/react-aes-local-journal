import React, { useState } from "react";

const Switch = () => {

    const [isOn, setIsOn] = useState(true);
    function handleSwitch() {
        setIsOn(!isOn);
    }
    const divStyle = {
        backgroundColor : !isOn ? "crimson" : "lightseagreen",
        color : "white",
        margin : "4px",
        padding : "2rem",
        border : "none",
    }
  return (
    <div>
      <button onClick={handleSwitch} style={divStyle}>
        {isOn ? 'On' : 'Off'}
      </button>
    </div>
  );
};

export default Switch;
