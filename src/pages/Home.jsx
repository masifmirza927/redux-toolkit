import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment, incrementByAmount} from "../features/counterSlice"

const Home = () => {
  const counter = useSelector( (state) => state.counter);
  const dispatcher = useDispatch();
  const [amount, setAmount] = useState("");

  const incrementValue = () => {
    dispatcher( increment() )
  }

  const updateAmount = () => {
    dispatcher(incrementByAmount(amount));
  }

  return (
    <>
      <h1>Count: {counter.value} </h1>
      <button onClick={incrementValue} className='me-2 btn btn-dark mb-3'>Increment</button>
      <button onClick={ () => dispatcher(decrement()) } className='me-2 btn btn-dark mb-3'>Decrement</button>
      <br />
      <input value={amount} type='text' onChange={ (e) => setAmount(e.target.value)} /> <br />
      <button className='mt-2 me-2 btn btn-dark' onClick={updateAmount}>Update Amount</button>
    </>
  )
}

export default Home