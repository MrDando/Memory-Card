import React from 'react'

function GameOver(props) {
    console.log(props)
    if (props.gamestarted) {
        return (
            <div className='gameover flex column align-center'>
                <h2>Welcome to the Memory Game</h2>
                <p>The goal of the game is to pick as many cards as you can without selecting a card that you already selected previously.</p>
                <p>There is a total of {props.cardNumber} cards in the deck.</p>
                <button onClick={props.startGame}>Start the Game !</button>
            </div>
        )
    } else {
        return (
            <div className='gameover flex column align-center'>
                <h2>Game Over</h2>
                <div className='gameover-message'>
                    {props.type === 'won' ? <p>Congratulations! You managed to pick correctly all {props.cardNumber} cards!</p> : null}
                    {props.type === 'lost' ? <p>You managed to pick correctly a total of {props.score} cards.</p> : null}
                </div>
                <button onClick={props.resetGame}>Play Again ?</button>
            </div>
        )
    }
}

export default GameOver