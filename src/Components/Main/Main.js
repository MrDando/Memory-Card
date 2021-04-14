import React, { useState} from 'react'

import './Main.css'

import getImages from './Helpers/getImages'

function Board(props) {

    return(
        props.cards.map(card => {
            return (
                <div className='card' key={card.id}>
                    <img src={card.url} alt='' data-id={card.id} onClick={props.selectCard}></img>
                </div>
            )
        })
    )

}

function Main(props) {

    const images = getImages()
    const [selected, setSelected] = useState([])

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

    function selectCard(e) {
        const cardID = e.target.dataset.id - 1

        if (selected.includes(cardID)) {
            props.updateHighscore()
            setSelected([])
            alert('Game over')
        } else {
            setSelected(selected.concat(cardID))

            props.increaseScore()
        }
    }

    return (
        <main className='flex justify-center'>
            <div className='flex gameboard'>
                <Board  cards={shuffleArray(images)}
                        selectCard={selectCard}
                />
            </div>
            
        </main>
    )
}

export default Main