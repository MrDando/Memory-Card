import React, {useState, useEffect} from 'react';

import './App.css';

import Header from './Components/Header/Header'

function App() {

  const [score, setScore] = useState(0)
  const [highscore, setHighscore] = useState(0)

  return (
    <div>
      <Header score={score} highscore={highscore}/>
    </div>
  );
}

export default App;
