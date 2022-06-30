import React from 'react'

import './App.css';
import { Counter, Jokes } from './components';
import { initialState } from './services/state/InitialState';
import { reducer } from './services/state/Reducer';
import { StateProvider } from './services/state/State';

function App() {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <div className="container">
        <Counter />
        <Jokes />
      </div>
    </StateProvider>
  );
}

export default App;
