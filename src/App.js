import React, { useState } from 'react';
import './App.css';
import Poster from './Components/Poster/poster';
import Info from './Components/Info/info';
import TryAgain from './Components/tryAgain';
import Popup from 'reactjs-popup';




 function App() {
    
    
    const [decade, setDecade] = useState('Decade  ');
    const [rating, setRating] = useState('Rating');
    const [type, setType] = useState('Movie');
    const [genre, setGenre] = useState('Genre');
    const [list, setList] = useState({});
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false);


    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const tryAgain = () => {
      let rndInt = randomIntFromInterval(0, list.results.length - 1);
      setMovie(list.results[rndInt])
      console.log(movie);
    }

    const changeType = (type) => {
      if (type === 'Movie') {
        const typeFinal = 'feature';
        return (typeFinal)
      }
      if (type === 'TV Show') {
        const typeFinal = 'tv_series';
        return (typeFinal)
      }
    }

    const changeRating = (rating) => {
      if (rating === 'Worst of the Worst') {
        return ('0.1,4.0')
      }
      if (rating === 'Under 7.0') {
        return ('4.1,6.9')
      } else {
          const ratingFirst = rating.split('-');
          const ratingApi = JSON.stringify(ratingFirst[0] + ',' + ratingFirst[1]);
          const ratingFinal = ratingApi.replace(/\"/g, "");
          return ratingFinal
      }
    }
    
    const fetchInfo = () => {
      const decadeFirst = decade.split('-');
      const decadeApi = JSON.stringify(decadeFirst[0] + '-01-01' + ',' + decadeFirst[1] + '-01-01');
      const decadeFinal = decadeApi.replace(/\"/g, "");

      
      fetch(`https://imdb-api.com/API/AdvancedSearch/k_ejq18fu9?title_type=${changeType(type)}&user_rating=${changeRating(rating)}&release_date=${decadeFinal}&num_votes100,9999999&genres=${genre}&languages=en&sort=num_votes,desc`)
     .then(response => response.json())
     .then(response => {
        if(response.errorMessage === "Server busy") {
          console.log("server is busy")
          window.alert("The ImDb server is currently busy. Please try again later!")
        } else {
          setList(response);
          chooseAMovie(response.results.length, response.results);
        }
        
        
      
      });
       
    }

    

    const chooseAMovie = (length, movieList) => {
     let rndInt = randomIntFromInterval(0, length - 1);
     setMovie(movieList[rndInt])
    }
  

    return (
    <div className="App">
      <h1 className='title' >THE BOREDOM BUTLER</h1>
      <div className='leftShoulder'>
        Dont know what to watch?
      </div>
      <div className='rightShoulder'>
        Let the Butler help!
      </div>
        <div className='chooser'>
        <div className="dropdown">
          <button className="dropbtn">{decade}</button>
          <div className="dropdown-content">
            <a onClick={() => setDecade('1950-1959')} href="#">1950-1959</a>
            <a onClick={() => setDecade('1960-1969')} href="#">1960-1969</a>
            <a onClick={() => setDecade('1970-1979')} href="#">1970-1979</a>
            <a onClick={() => setDecade('1980-1989')} href="#">1980-1989</a>
            <a onClick={() => setDecade('1990-1999')} href="#">1990-1999</a>
            <a onClick={() => setDecade('2000-2009')} href="#">2000-2009</a>
            <a onClick={() => setDecade('2010-2019')} href="#">2010-2019</a>
            <a onClick={() => setDecade('2020-2022')} href="#">2020-2022</a>
          </div>
        </div>
        <div className='dropdown'>
          <button className="dropbtn">{rating}</button>
          <div className="dropdown-content">
            <a onClick={() => setRating('9.0-10.0')} href="#">9.0-10.0</a>
            <a onClick={() => setRating('8.5-9.0')} href="#">8.5-9.0</a>
            <a onClick={() => setRating('8.0-8.5')} href="#">8.0-8.5</a>
            <a onClick={() => setRating('7.5-8.0')} href="#">7.5-8.0</a>
            <a onClick={() => setRating('7.0-7.5')} href="#">7.0-7.5</a>
            <a onClick={() => setRating('Under 7.0')} href="#">Under 7.0</a>
            <a onClick={() => setRating('Worst of the Worst')} href="#">Worst of the Worst</a>
          </div>
        </div>
        <div className='dropdown'>
          <button className="dropbtn">{type}</button>
          <div className="dropdown-content">
            <a onClick={() => setType('Movie')} href="#">Movie</a>
            <a onClick={() => setType('TV Show')} href="#">TV Show</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">{genre}</button>
          <div className="dropdown-content">
            <a onClick={() => setGenre('Action')} href="#">Action</a>
            <a onClick={() => setGenre('Animation')} href="#">Animation</a>
            <a onClick={() => setGenre('Comedy')} href="#">Comedy</a>
            <a onClick={() => setGenre('Crime')} href="#">Crime</a>
            <a onClick={() => setGenre('Documentary')} href="#">Documentary</a>
            <a onClick={() => setGenre('Drama')} href="#">Drama</a>
            <a onClick={() => setGenre('Horror')} href="#">Horror</a>
            <a onClick={() => setGenre('Mystery')} href="#">Mystery</a>
            <a onClick={() => setGenre('Romance')} href="#">Romance</a>
            <a onClick={() => setGenre('Sci-Fi')} href="#">Sci-Fi</a>
          </div>
        </div>
        <div>
          <button className='butler' onClick={fetchInfo}>Butler!</button>
          <TryAgain movie={movie} another={tryAgain} className='another'/>
        </div>
        <div className='border'>
          <Info movie={movie}/>
          <Poster movie={movie}/>
        </div>
      </div>
    </div>

      );
}


export default App;
