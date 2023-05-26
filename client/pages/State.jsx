import React, { useState, useEffect } from 'react';

const State = () => {
  const [count, setCount] = useState(0);
  const [buttonState, setButtonState] = useState(false);

  const handleClick = () => {
    setButtonState(!buttonState);
  }

  useEffect(() => {
    setCount(count + 1);
    return () => console.log('Prints on unmount');
  }, [buttonState]);

  return (
    <div className='hooks-container'>
      <h2> useState and useEffect </h2>
      <section className='hook-data-section'>
        <p>count: {count}
          <br />
          count will increment via useEffect on buttonState state change
        </p>
        <p>buttonState: {buttonState.toString()}</p>
        <button onClick={handleClick}>
          Click to change state of buttonState
        </button>
      </section>
    </div>
  );
}

export default State;