import React, { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const quotes = [
    {
      quote: "\"The craziest goddamn thing I've read in a long time.\"",
      author: "Alexander Payne",
      affiliation: "Academy-Award winning writer/director of Sideways and The Descendants"
    },
    
 
  ];

 
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteOffset, setQuoteOffset] = useState(0);

  useEffect(() => {
    const currentQuote = quotes[quoteIndex].quote;
       

    // Function to type the quote
    const typeQuote = () => {
      if (quoteOffset < currentQuote.length) {
        setQuoteOffset(quoteOffset + 1);
      }
    };

    // Start typing when the component mounts
    const typingInterval = setInterval(typeQuote, 50);

    // Stop typing after the quote is fully typed
    if (quoteOffset === currentQuote.length) {
      clearInterval(typingInterval);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [quoteIndex, quoteOffset, quotes]);

  const currentQuote = quotes[quoteIndex];
  const animatedQuote = currentQuote.quote.substr(0, quoteOffset);




  return (
    <div className="hero-container">
      <section id="quotes-section" className="quotes--section">
        <div className="quotes">
          <p className="quote">{animatedQuote}</p>
          <p className="author">~ {currentQuote.author}</p>
          <p className="affiliation">{currentQuote.affiliation}</p>
        </div>
      </section>

      <section id="heroSection" className="hero--section">
        <div className="hero--section--img">
        <img  src="./img/rat_park.jpg" alt="Hero Section" id="animatedImage3"  />
        </div>
        <div className="hero--section--content--box">
          <div className="hero--section--content">
          <h1 className="skills-section--heading">Rat Park</h1>
           
            <p className="hero--section-description">
            Enter Rat Park at your own risk. Lose the cage. Find yourself.
                 An L.A. power couple orders an A.I. sex droid to escape their marital prison. 
                 What happens to them could happen to you.
                  With his fourth novel, Adam Novak shows us how it takes a village of automatons to augment your humanity, 
                  feed your deceptive compulsive sexual addiction, 
                and forget why you ever got married in the first place
            
            </p>
          </div>
          <br />
          <br />
          <a href="https://a.co/d/0p21mCR" target="_blank">

          <button className="btn btn-primary">
          <span>Hurry! </span><span>Buy Now</span>
          </button>
          </a>

        </div>
      </section>
    </div>
  );
}
