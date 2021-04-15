import React, {useState} from 'react';

import './App.css';

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {

  const [score, setScore] = useState(0)
  const [highscore, setHighscore] = useState(0)

  function increaseScore() {
    setScore(score + 1)
  }

  function updateHighscore() {
    if (score > highscore) {
      setHighscore(score)
    }
  }

  function resetScore() {
    setScore(0)
  }

  return (
    <div className='flex column'>
      <Header score={score} 
              highscore={highscore}
      />
      <Main increaseScore={increaseScore}
            updateHighscore={updateHighscore}
            resetScore={resetScore}
            score={score}
      />
    </div>
  );
}

export default App;
