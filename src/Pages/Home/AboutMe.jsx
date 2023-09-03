
import React, { useState, useEffect } from 'react';

export default function AboutMe() {
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

      <section id="Nonpro" className="about--section">
    
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">The Non Pro</h1>
          <p className="hero--section-description">
          In the spirit of Elmore Leonard's Get Shorty and the HBO series Entourage,
                Adam Novak's crime novel, The Non-Pro, skewers the Hollywood scene like a picador to a bull. 
                When movie industry insider Jerry Makos dies under mysterious circumstances, 
                his brother Josh seeks the killer while trying not to get sucked into the abyss of the movie industry.
                 Who would want his brother dead? That was the problem. . .the list of social climbers and celebrity parasites seemed to be endless. 
                 Just when it seems like Josh will never find the killer, the planets align for a perfect third act..
          </p>
          
        </div>
      <br />
      <br />
      <a href="https://www.simonandschuster.com/books/The-Non-Pro/Adam-Novak/9781627934473" target="_blank">
      <button className="btn btn-primary">
            <span>Hurry! </span><span>Buy Now</span>
         </button>
      </a>
       
      </div>
      <div className="about--section--img">
        <img src="./img/the_non_pro.jpg" alt="About Me" id="animatedImage7"/>
        </div>
    
    </section>
    </div>
  );
}
