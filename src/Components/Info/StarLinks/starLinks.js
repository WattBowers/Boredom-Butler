import React from 'react'
import './starLinks.css'

const StarLinks = ({ movie }) => {
    if(movie.stars) {
    if(movie.stars.includes(',')) {
        const starsArr = movie.stars.split(',')
        return (
            <div>
                <h3>Director: <a id='first' className='star' target="_blank" href={`https://en.wikipedia.org/wiki/${starsArr[0]}`}>{starsArr[0]}</a></h3>
                <h3>Starring:<a className='star' target="_blank" href={`https://en.wikipedia.org/wiki/${starsArr[1]}`}>{starsArr[1]}</a><a className='star' target="_blank" href={`https://en.wikipedia.org/wiki/${starsArr[2]}`}>{starsArr[2]}</a><a className='star' target="_blank" href={`https://en.wikipedia.org/wiki/${starsArr[3]}`}>{starsArr[3]}</a><a className='star' target="_blank" href={`https://en.wikipedia.org/wiki/${starsArr[4]}`}>{starsArr[4]}</a></h3>
            </div>
            )}
        }
}

export default StarLinks