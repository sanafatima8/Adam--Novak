
import React, { useState, useEffect } from 'react';

export default function IndustrySection() {
    const quotes = [
        {
            quote: "\"The ghost of F. Scott Fitzgerald nods in approval. \"",
            author: "Lem Dobbs",
            affiliation: " writer of The Limey"
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

      <section id="Industry" className="about--section">
    
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">Freaks of the Industry</h1>
          <p className="hero--section-description">
          In the tradition of Mark Z. Danielewski's House of Leaves and P.T. Anderson's Magnolia, Adam Novak explores the city of angels and demons in his third novel Freaks of the Industry.
          </p>
          <p className="hero--section-description">
          Studio executive Rodney Muir quits the business after a prostitution scandal and returns home to Washington, DC where he falls for two women, the unhappy wife of a diplomat who harbors a dark secret and a federal agent investigating a Starbucks triple homicide who uncovers a White House conspiracy that threatens them all.
          </p>
     
          
        </div>
      <br />
      <br />
      <a href="https://a.co/d/hEKXbFR" target="_blank">
      <button className="btn btn-primary">
            <span>Hurry! </span><span>Buy Now</span>
         </button>
      </a>
      </div>
      <div className="about--section--img">
        <img src="./img/freaks_of_the_industry.jpg" alt="About Me" id="animatedImage4" />
        </div>
    
    </section>
    </div>
  );
}
