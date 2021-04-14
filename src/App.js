import React, {useState, useEffect} from 'react';

import './App.css';

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {

  const [score, setScore] = useState(0)
  const [highscore, setHighscore] = useState(0)

  return (
    <div className='flex column'>
      <Header score={score} highscore={highscore}/>
      <Main />
    </div>
  );
}

export default App;
