import React, { useState, useRef } from 'react';

const Ref = () => {
  const [countdown, setCountdown] = useState(20);
  const ref1 = useRef(1);
  const ref2 = useRef(null);
  const ref3 = useRef(null);


  const clickIncrementRef1 = () => {
    ref1.current += 1
  }

  const clickStartCountdown = () => {
    ref2.current = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000)}

  const clickAbort = () => {
    clearInterval(ref2.current);
  }

  const clickFocus = () => {
    ref3.current.focus();
  }

  return (
    <div className='hooks-container'>
      <h2> useRef </h2>
      <section className='hook-data-section'>
        <p>
          ref1: {ref1.current}
          <br />
          Notice that this change doesn't cause the page to re-render
        </p>
        <button onClick={clickIncrementRef1}>
          Click to increment ref1.current
        </button>

        <p> Countdown: {countdown} </p>
        <button onClick={clickStartCountdown}>Start Countdown?</button>
        <button onClick={clickAbort}>Abort!!!</button>
    
        <p>DOM Manipulation</p>
        <button onClick={clickFocus}>Focus!</button>
        <input id="focus-input" ref={ref3} type="text" />  
      </section>
    </div>
  );
}

export default Ref;