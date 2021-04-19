import React from 'react'

function GameOver(props) {
    console.log(props)
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

export default GameOver