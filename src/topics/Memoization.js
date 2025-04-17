import React, { useState, useMemo } from 'react';

const expensiveCalculation = (num) => {
  console.log('Calculating...');
  for (let i = 0; i < 100000; i++) {  // Simulate an expensive operation
    num += 1;
  }
  return num;
};

const Memoization = () => {
  const [count, setCount] = useState(0);

  // Expensive calculation with useMemo
  const expensiveResult = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  // Handle input change
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value) || 0; // Ensure it's a valid number or 0
    setCount(value);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <input 
        type="number" 
        value={count}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <p>Expensive Calculation Result: {expensiveResult}</p>
    </div>
  );
};

export default Memoization;
