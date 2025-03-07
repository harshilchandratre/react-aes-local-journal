import React, { useState } from 'react'

const fieldStyle = {
    padding : "2rem",
    margin : "2rem",

}
const NumberCounter = () => {
    const [value, setValue] = useState(0);

    function increment() {
        setValue(value + 1);

    }
    function decrement() {
        setValue(value - 1);
        
    }
  return ( 
    <div>
        <input type="number" style={fieldStyle} value={value} readOnly/>
        <button style={fieldStyle} onClick={increment}> + </button>
        <button style={fieldStyle} onClick={decrement}> - </button>
    </div>
  )
}

export default NumberCounter