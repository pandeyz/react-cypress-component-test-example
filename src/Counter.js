import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '20px' }}>
      <button data-btn-type="decremenet" onClick={() => setCount(count - 1)} disabled={( count === 0 ) ? true: null}>-</button>
      <span id="counter_result" style={{ padding: '10px' }}>{count}</span>
      <button data-btn-type="incremenet" onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
