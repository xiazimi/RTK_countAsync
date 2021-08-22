import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, increaseAsync } from './counterSlice';

const Count = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.counter)
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increase(2))}>+2</button>
      <button onClick={() => dispatch(decrease(1))}>-1</button>
      <button onClick={() => dispatch(increaseAsync(3))}>async increase</button>
    </>
  ) 
}

export default Count;