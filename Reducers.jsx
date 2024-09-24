import React, { useReducer } from 'react';

// Initial state
const initialState = {
  count: 0,
  price: 0,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'add100':
      return { ...state, price: state.price + 100 };
    case 'add150':
      return { ...state, price: state.price - 100 };
    default:
      return state;
  }
};

// Component
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <h1>Price: {state.price}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment Count</button><br />
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement Count</button><br />
      <button onClick={() => dispatch({ type: 'add100' })}>Add 100 to Price</button><br />
      <button onClick={() => dispatch({ type: 'add150' })}>Add 150 to Price</button>
    </div>
  );
}
