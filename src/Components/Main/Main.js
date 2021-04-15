import React, { useEffect, useState} from 'react'

import './Main.css'

import getImages from './Helpers/getImages'
import GameLost from './Components/GameLost'
import GameWon from './Components/GameWon'
import Board from './Components/Board'

function Main(props) {

    const images = getImages()
    const [selected, setSelected] = useState([])
    const [gamestate, setGamestate] = useState('inProgress')

    useEffect(() => {
        if(props.score === images.length) {
            endGame('win')         
        }
    },[props.score])

    function shuffleArray(array) {
        let shuffledArray = [...array]
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            var temp = shuffledArray[i];
            shuffledArray[i] = shuffledArray[j];
            shuffledArray[j] = temp;
        }
        return shuffledArray
    }

    function endGame(type) {
        props.updateHighscore()
        if (type === 'win') {
            setGamestate('gameWon')
        } else {
            setGamestate('gameLost')
        }
    }

    function resetGame() {
        setSelected([])
        props.resetScore()
        setGamestate('inProgress')
    }

    function selectCard(e) {
        const cardID = e.target.dataset.id - 1

        if (selected.includes(cardID)) {
            endGame('lost')
        } else {
            setSelected(selected.concat(cardID))
            props.increaseScore()
        }
    }
    
    return (
        <main className='flex justify-center'>
            {gamestate === 'inProgress' ? <Board  cards={shuffleArray(images)} selectCard={selectCard}/> : null}
            {gamestate === 'gameWon' ? <GameWon resetGame={resetGame} /> : null}
            {gamestate === 'gameLost' ? <GameLost resetGame={resetGame} score={props.score} /> : null}
        </main>
    )
}

export default Main