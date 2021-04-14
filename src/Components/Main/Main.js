import React, { useEffect, useState} from 'react'

import './Main.css'

import getImages from './Helpers/getImages'

function Board(props) {

    return(
        props.cards.map(card => {
            console.log(card)
            return (
                <div className='card' key={card.id}>
                    <img src={card.url}></img>
                </div>
            )
        })
    )

}

function Main(props) {

    const [images, setImages] = useState(getImages())

    function shuffleArray(array) {
        let shuffledArray = [...array]
        console.log(shuffledArray)
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            var temp = shuffledArray[i];
            shuffledArray[i] = shuffledArray[j];
            shuffledArray[j] = temp;
        }
        return shuffledArray
    }

    return (
        <main className='flex justify-center'>
            <div className='flex gameboard'>
                <Board cards={shuffleArray(images)}/>
            </div>
            
        </main>
    )
}

export default Main