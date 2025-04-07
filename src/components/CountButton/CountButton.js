import React, { useState, useEffect } from "react";
import "./CountButton.css";

const CountButton = (props) => {
  console.log(props.incrementBy);
  console.log(props.buttonColor);

  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy);
  };

  const buttonStyles = {
    background: props.buttonColor,
    borderRadius: props.borderRadius,
  };

  useEffect(() => {
    console.log("Use Effect func called when component mounts");
  }, []);

  useEffect(() => {
    //console.log("Use Effect func called or the currentCount is updated");
    console.log(currentCount);
    if (currentCount === 30) {
      //alert("the current count is 20");
      setCurrentCount(0);
    }
  }, [currentCount]);

  return (
    <div>
      <button style={buttonStyles} onClick={handleClick}>
        +{props.incrementBy}
      </button>
      <div className={"count-display"}>{currentCount}</div>
    </div>
  );
};

export default CountButton;
