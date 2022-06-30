import React, { useState } from 'react'

import './Counter.css';

const Counter = () => {

  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter+1)
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <div className='container' >
      <div className='counter-wrapper'>
        <h1 className='counter-heading'>
          COUNTER
        </h1>
        <p className={`counter-value ${counter===0 && 'counter-value-zero'}`}>
          {counter}
        </p>
        <div className='buttons-wrapper'>
          <button className='increment-reset-buttons' onClick={reset}>Reset</button>
          <button className='increment-reset-buttons' onClick={increment}>Increment</button>
        </div>
      </div>
    </div>
  )
}

export default Counter