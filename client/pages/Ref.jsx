import React, { useState, useRef } from "react";

const Ref = () => {
  const [countdown, setCountdown] = useState(20);
  const ref1 = useRef(1);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const clickIncrementRef1 = () => {
    ref1.current += 1;
  };

  const clickStartCountdown = () => {
    ref2.current = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);
  };

  const clickAbort = () => {
    clearInterval(ref2.current);
  };

  const clickFocus = () => {
    ref3.current.focus();
  };

  return (
    <div className="hooks-container">
      <h2> useRef </h2>
      <section className="hook-data-section">
        <p>ref1: {ref1.current}</p>
        <button onClick={clickIncrementRef1}>
          Click to increment ref1.current
        </button>
        <p>Notice that this change doesn't cause the page to re-render</p>
      </section>
      <section className="hook-data-section">
        <p> Countdown: {countdown}s</p>
        <button onClick={clickStartCountdown}>Start Countdown?</button>
        <button onClick={clickAbort}>Abort!!!</button>
        <p>
          Starting the countdown initiates a setInterval call which decrements
          the seconds left. The intervalID needed to clear the interval is
          stored via useRef, and is used in the clearInterval function when
          abort is clicked. Storing it via useRef keeps the component from
          re-rendering.
        </p>
        <p>
          However, the number of seconds left is stored via useState. When it
          updates, it causes the component to re-render. See how many times you
          can click to increment ref1 between page renders!
        </p>
      </section>
      <section className="hook-data-section">
        <p>DOM Manipulation</p>
        <p>
          useRef can also be used to store HTML elements. The input element
          below is stored via useRef, and passed to a function which calls the
          focus function on the input element when the button is clicked
        </p>
        <button onClick={clickFocus}>Focus!</button>
        <input id="focus-input" ref={ref3} type="text" />
      </section>
    </div>
  );
};

export default Ref;
