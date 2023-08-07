import React, { useState, useEffect } from "react";

const InfiniteEffect = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  useEffect(() => {
    setCountOne(countOne + 1);
  });

  useEffect(() => {
    setCountTwo(countTwo + 1);
  }, [countTwo]);

  return (
    <div className="hooks-container">
      <h2> useEffect Anti-Patterns </h2>
      <section className="hook-data-section">
        <p>
          countOne is stored via useState and is incremented via a useEffect
          hook that has no dependency array
        </p>
        <p>countOne: {countOne}</p>
        <p>
          countTwo is stored via useState and is incremented via a useEffect
          hook that has an empty dependency array
        </p>
        <p>countTwo: {countTwo}</p>
        <p>
          As countOne and countTwo are updated each render, and a component
          re-renders every time state is updated, this pattern results in an
          infinite loop.
        </p>
      </section>
    </div>
  );
};

export default InfiniteEffect;
