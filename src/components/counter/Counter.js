import React, { useState } from 'react'
import { getJoke } from '../../services/api/ApiManager';
import { actions } from '../../services/state/Reducer';
import { useStateValue } from '../../services/state/State';

import './Counter.css';

const Counter = () => {

  // Maintaining counter state within the component as it is not required to access from outside this component
  const [counter, setCounter] = useState(0)

  // Maintaining joke state as it is required to access from outside 
  const [, dispatch] = useStateValue()

  const incrementAndFetchJoke = async () => {
    const joke = await getJoke()
    setCounter(counter+1)
    dispatch({
      type: actions.SET_JOKE,
      payload: joke.data.value
    })
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
          <button className='increment-reset-buttons' onClick={incrementAndFetchJoke}>Increment</button>
        </div>
      </div>
    </div>
  )
}

export default Counter