import React from 'react';
import StarLinks from './StarLinks/starLinks';
import './info.css';


const Info = ({ movie, loading }) => {
    
    
    
    if(Object.keys(movie).length !== 0){
        
        return ( 
            <div className='innertv'>
                <h1>{movie.title}</h1>
                <h2 className='rating'>{'Rating:  ' + movie.imDbRating + '/10'}</h2>
                <h2 className='info'>{movie.plot}</h2>
                <StarLinks className='push' movie={movie}/>

            </div>
            )
        }
    }

export default Info;