import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard({title,description,posterURL,rating}) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={posterURL} alt ={title} />
      <p>{description}</p>
      <p>rate:{rating}</p>
    </div>
  );
}

export default MovieCard;
