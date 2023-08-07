import React, { useState, useEffect } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [buttonState, setButtonState] = useState(false);

  const handleClick = () => {
    setButtonState(!buttonState);
  };

  useEffect(() => {
    setCount(count + 1);
    return () => console.log("Prints on unmount");
  }, [buttonState]);

  return (
    <div className="hooks-container">
      <h2> useState and useEffect </h2>
      <p>This white box is the "State" component</p>
      <section className="hook-data-section">
        <p>"buttonState" is stored in this component using the useState hook</p>
        <p>buttonState: {buttonState.toString()}</p>
        <button onClick={handleClick}>
          Click to change state of buttonState
        </button>
        <p>
          "count" is also stored via useState and will increment via useEffect
          when the state of "buttonState" change
        </p>
        <p>count: {count}</p>
      </section>
    </div>
  );
};

export default State;
