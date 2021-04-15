import React from 'react'

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

export default Board