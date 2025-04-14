import React, { useState, useEffect, useRef } from 'react';

const ControlledComponent = () => {
  const [myvalue, setValue] = useState(''); // Using state for the first input
  const [name, setName] = useState('Baseer'); // Using state for the first input


  const myRefvalue = useRef('');  // Using ref for the second input

  useEffect(() => {
    console.log('State Changed');
    return () => {
      console.log('Nothing to release');
    };
  }, [myvalue,name]);

  const handleChange = (e) => {
    setValue(e.target.value);  // Controlled input updates state
  };

  const handleRefChange = (e) => {
    myRefvalue.current = e.target.value;  // Update ref value, but don't trigger re-render
    // Manually update the value to keep the input responsive
    e.target.value = myRefvalue.current;  // Sync input with ref value
  };

  return (
    <div>
      <input
        type="text"
        value={myvalue}  // Controlled by React state
        onChange={handleChange}  // Updates state on input change
      />
      <p>Input Value: {myvalue}</p>

      <input
        type="text"
        defaultValue={myRefvalue.current}  // Use ref for the second input, but it's not controlled by React
        onChange={handleRefChange}  // Updates the ref value manually
      />
      <p>Input Value (Ref): {myRefvalue.current}</p>
    </div>
  );
};

export default ControlledComponent;
