import React, { useState } from 'react';
import LoadingIcons from 'react-loading-icons'

function Quotecall() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setQuote(null)
    setAuthor(null)
    fetch('https://api.quotable.io/random',
    ) 
      .then(res => res.json())
      .then(res => {
        setQuote(res.content)
        setAuthor(res.author)
        setLoading(false)
      })
      .catch(error => setError(error));
      console.log(quote)
  };

  return (
    <div id='quote-block'>
      <LoadingIcons.Grid fill="#c7c7c7" className={loading? 'loading on' : 'loading off'} />
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
      <p className='description'>A quote is only a button away.</p>
    </div>
  );
}

export default Quotecall