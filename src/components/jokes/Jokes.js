import React from 'react'
import { useStateValue } from '../../services/state/State'

import './Jokes.css'

const Jokes = () => {


    // Get joke value from the store
    const [{joke}] =  useStateValue()

  return (
    <div className='jokes-wrapper'>
        <h2 className='joke-heading'>Chuck Norris Joke</h2>
        <p className='joke'>{`"${joke}"`}</p>
    </div>
  )
}

export default Jokes