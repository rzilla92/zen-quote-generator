import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa-solid, fa-quote-left } from '@fontawesome/free-solid-svg-icons'

function Quotecall() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random')
      .then(res => res.json())
      .then(res => {
        setQuote(res[0].q)
        setAuthor(res[0].a)
      })
      .catch(error => setError(error));
      console.log(quote)
  };

  return (
    <div id='quote-block' className='font-sans'>
      
      {quote &&
        <div className='quote-box'> 
        <i className="fa-solid fa-quote-left"></i>
        <p className='quote'>{quote}</p>
        <i className="fa-solid fa-quote-right"></i>
        </div>
        }
      {author && <p className='author'>{author}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Get quote</button>
    </div>
  );
}

export default Quotecall