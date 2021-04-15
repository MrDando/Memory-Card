import React from 'react'

function GameWon(props) {

    return (
        <div className='gameover flex column align-center'>
            <h2>Victory</h2>
            <button onClick={props.resetGame} style={{marginTop: '1em'}}>Play Again?</button>
        </div>
    )
}

export default GameWon