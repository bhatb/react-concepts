import React, { useReducer } from 'react';

// Step 1: Define initial state
const initialState = { count: 0 };

// Step 2: Define reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// reducer – A function that decides how state changes based on an action.
// initialState – The starting value of the state.

// Step 3: Component using useReducer
function UseReducerHook_Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold mb-2">Count: {state.count}</h1>
      <button className="bg-blue-500 text-white px-3 py-1 m-1 rounded" onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button className="bg-red-500 text-white px-3 py-1 m-1 rounded" onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button className="bg-gray-500 text-white px-3 py-1 m-1 rounded" onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  );
}

export default UseReducerHook_Counter;
