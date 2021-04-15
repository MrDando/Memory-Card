import React from 'react'

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

export default GameLost