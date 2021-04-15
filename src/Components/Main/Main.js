import React, { useEffect, useState} from 'react'

import './Main.css'

import getImages from './Helpers/getImages'

function GameWon(props) {

    return (
        <div className='gameover flex column align-center'>
            <h2>Victory</h2>
            <button onClick={props.resetGame} style={{marginTop: '1em'}}>Play Again?</button>
        </div>
    )
}

function GameLost(props) {

    return (
        <div className='gameover flex column align-center'>
            <h2>You lose</h2>
            <div className='score-display flex align-center' style={{margin:'1em 0'}}>
                <p>Score:</p>
                <p style={{marginLeft: '0.5em'}}>{props.score}</p>
            </div>
            <button onClick={props.resetGame}>Try Again ?</button>
        </div>
    )
}

function Board(props) {

    return(
        <div className='flex gameboard'>
            {props.cards.map(card => {
            return (
                <div className='card' key={card.id}>
                    <img src={card.url} alt='' data-id={card.id} onClick={props.selectCard}></img>
                </div>
            )
            })}
        </div>
    )

}

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