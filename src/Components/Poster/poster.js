import React from 'react'; 
import './poster.css';

const Poster = ({ movie }) => {
   if (movie.image) {
       return <img className='poster' src={movie.image} />
   }

}

export default Poster;