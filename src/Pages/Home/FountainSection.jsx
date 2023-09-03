
import React, { useState, useEffect } from 'react';

export default function FountainSection() {
  const quotes = [
    {
        quote: "\" Strange genius mixed with stomach-turning madness. \"",
        author: "Matt Greenberg",
        affiliation: "screenwriter of 1408 and Pet Sematary"
    },
    // ... Add other quotes ...
];
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteOffset, setQuoteOffset] = useState(0);
  const [forwards, setForwards] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (quoteOffset >= quotes[quoteIndex].quote.length) {
          setForwards(false);
        } else {
          setQuoteOffset(quoteOffset + 1);
        }
      } else {
        if (quoteOffset === 0) {
          setForwards(true);
          setQuoteIndex((quoteIndex + 1) % quotes.length);
        } else {
          setQuoteOffset(quoteOffset - 1);
        }
      }
    }, 70);

    return () => {
      clearInterval(interval);
    };
  }, [quoteIndex, quoteOffset, forwards]);

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





    <section id="Fountain" className="about--section">
    <div className="about--section--img">
        <img src="./img/take_fountain.jpg" alt="About Me"  id="animatedImage6" />
        </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">Take Fountain</h1>
          <p className="hero--section-description">
         
          A podcast transcript is turned in to a small publishing house in Los Angeles. 
                It turns out to be a piece of missing evidence in a murder investigation that ran cold. 
                Take Fountain is the reprinting of that transcript, 
                and only by reading the entire conversation can the murder be solved. 
                </p>
                <p className="hero--section-description">
         
                Take Fountain is a truly unique novel that slowly simmers to boil as an interview
                     between two filmmakers gives hints to the anatomy of a brutal murder.
               </p>

        </div>
      <br />
    
      <a href="https://a.co/d/a9RdKLg" target="_blank">
      <button className="btn btn-primary">
            <span>Hurry! </span><span>Buy Now</span>
         </button>
      </a>
       
      </div>
    
    </section>
    </div>
  );
}
