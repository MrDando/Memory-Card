import React from 'react'
import './Header.css';

function Header (props) {

    return (
        <header className='flex justify-center align-center'>
            <div style={{marginLeft: 'auto'}}>
                <h1 style={{marginLeft: '15vW'}}>Memory Game</h1>
            </div>
            <div className='flex right-section'>
                <div className='flex column' style={{marginRight: '15vW'}}>
                    <p>Score: {props.score}</p>
                    <p>Highscore: {props.highscore}</p>
                </div>
                <div className='flex column justify-center'>
                    <a href='https://github.com/MrDando/Memory-Card' target='_blank' rel="noreferrer">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header