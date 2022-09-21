import React, { useState } from 'react'

function Counter() {
  
    const [count, setCount] = useState(0);
  
    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(count - 1);
  
    return (
      <div style={{margin: '50px'}}>
        <h1>Counter: {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    )
  }

export default Counter