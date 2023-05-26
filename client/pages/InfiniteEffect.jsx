import React, { useState, useEffect } from 'react';

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
    <div className='hooks-container'>
      <h2> useEffect Anti-Patterns </h2>
      <section className='hook-data-section'>
        <p>
          countOne: {countOne}
          <br />
          countTwo: {countTwo}
          <br />
          countOne and countTwo will increment via useEffect on every render
        </p>
      </section>
    </div>
  );
}

export default InfiniteEffect;