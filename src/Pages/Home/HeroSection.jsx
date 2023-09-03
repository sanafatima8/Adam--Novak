import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const quotes = [
    {
      quote: "\"The craziest goddamn thing I've read in a long time.\"",
      author: "Alexander Payne",
      affiliation: "Academy-Award winning writer/director of Sideways and The Descendants"
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
