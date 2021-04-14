import React from 'react'

import './Main.css'

import getImages from './Helpers/getImages'


function Main(props) {
    const images = getImages()
    console.log(images)

    return (
        <main>
            <div className='board'>
            </div>
        </main>
    )
}

export default Main