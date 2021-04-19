import React, { useEffect, useState} from 'react'

import './Main.css'

import getImages from './Helpers/getImages'
import GameOver from './Components/GameOver'
import Board from './Components/Board'

function Main(props) {

    const images = getImages()
    const [selected, setSelected] = useState([])
    const [gamestarted, setGamestarted] = useState(true)
    const [boardClass, setBoardClass] = useState('flip-board-inner is-flipped')
    const [gameOverType, setGameOverType] = useState('')
    const [thisRoundCards, setThisRoundCards] = useState([])

    useEffect(() => {
        if(props.score === images.length) {
            endGame('win')         
        } else {
            pickCards(10)
        }
    },[props.score])

    function pickCards(NumberOfCards) {
        let roundCards = []
        let roundCardsIds = []

        let firstcardPicked = false

        while(!firstcardPicked) {
            const firstCard = images[Math.floor(Math.random() * images.length)];

            if(!selected.includes(firstCard.id-1)) {
                firstcardPicked = true
                roundCards = roundCards.concat(firstCard)
                roundCardsIds.push(firstCard.id)
            }
        }

        while (roundCards.length < NumberOfCards) {
            const card = images[Math.floor(Math.random() * images.length)];

            if(!roundCardsIds.includes(card.id)) {
                roundCards = roundCards.concat(card)
                roundCardsIds.push(card.id)
            }
        }

        roundCards = shuffleArray(roundCards)
        setThisRoundCards(roundCards)
    }

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

    function startGame() {
        setBoardClass('flip-board-inner')
        setTimeout(function(){setGamestarted(false)}, 1000)
    }

    function endGame(type) {
        props.updateHighscore()
        setGameOverType(type)
        setBoardClass('flip-board-inner is-flipped')
        
    }

    function resetGame() {
        setSelected([])
        setTimeout(function(){props.resetScore()}, 500)
        setBoardClass('flip-board-inner')
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
            <div className='flip-board'>
                    <div className={boardClass}>
                        <div className='flip-board-front'>
                            <Board cards={thisRoundCards} selectCard={selectCard} />
                        </div>
                        <div className='flip-board-back'>
                            <GameOver   score={props.score}
                                        startGame={startGame}
                                        resetGame={resetGame} 
                                        type={gameOverType} 
                                        cardNumber={images.length} 
                                        gamestarted={gamestarted}/>
                        </div>
                    </div>
                </div>
    </main>
    )
}

export default Main