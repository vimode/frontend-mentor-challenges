import React from "react";

import './Button.css';

const Button = ( {btnClassName, handleButtonClick, buttonText}) => {
  return (

    <button 
    className={`btn ${btnClassName}`}
    onClick= {handleButtonClick}>
      {buttonText}
    </button>

  )
}

export default Button;