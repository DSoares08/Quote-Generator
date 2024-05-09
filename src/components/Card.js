import React from 'react'

const Card = ({ quote }) => {
  return <div>
    <p>{quote.quote}</p>
    <p>by {quote.author}</p> | <a href="#">Tweet</a>
  </div>;
}

export default Card
