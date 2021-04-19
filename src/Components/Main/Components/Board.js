import React, {useState, useEffect} from 'react'

function Board(props) {

    let [cardClass, setCardClass] = useState('flip-card-inner is-flipped')

    useEffect(() => {
        setTimeout(function(){setCardClass('flip-card-inner')}, 700)
    },[props])

    function flipCard(e) {
        setCardClass('flip-card-inner is-flipped')

        setTimeout(function(){props.selectCard(e)}, 700)

    }

    return(
        <div className='flex gameboard'>
            {props.cards.map(card => {
                return (
                    <div className='flip-card' key={card.id}>
                        <div className={cardClass}>
                            <div className='flip-card-front'>
                                <img src={card.url} alt='' data-id={card.id} onClick={flipCard}></img>
                            </div>
                            <div className='flip-card-back flex column justify-center'>
                                <h3>Memory</h3>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default Board