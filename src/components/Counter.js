import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h3>Counter: {count}</h3>
      <div className="counter-buttons">
        <button onClick={decrement} disabled={count <= 0}>
          Decrease
        </button>
        <button onClick={reset}>
          Reset
        </button>
        <button onClick={increment}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;