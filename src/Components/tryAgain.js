import React from 'react'


const TryAgain = ({ another, movie }) => {
    if(Object.keys(movie).length !== 0) {
        return <button className='another' onClick={another}>Let's try something else</button> 
    }
}

export default TryAgain;