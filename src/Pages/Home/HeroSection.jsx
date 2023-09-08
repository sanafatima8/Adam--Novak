import React, { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const quotes = [
    {
      quote: "\"The craziest goddamn thing I've read in a long time.\"",
      author: "Alexander Payne",
      affiliation: "Academy-Award winning writer/director of <i>Sideways</i> and <i>The Descendants</i>"
    },
    {
      quote: "\"Strange genius mixed with stomach-turning madness.\"",
      author: "Matt Greenberg",
      affiliation: "screenwriter of 1408 and Pet Sematary"
    },
    {
      quote: "\"I'm sniffing a breakthrough. It's like Bret Easton Ellis and Philip K. Dick had a baby, and the baby wrote a book.\"",
      author: "Jerry Stahl",
      affiliation: "author of Permanent Midnight and Bad Sex on Speed"
    },
    {
      quote: "\"So successfully strange it's almost its own genre. Holding a mirror, if not a hall of mirrors to our culture where we disappear and find ourselves at the same time.\"",
      author: "Aris Janigan",
      affiliation: "author of Waiting for Lipchitz at Chateau Marmont"
    },
    {
      quote: "\" Novak has a merciless eye for a society in which striving replaces every consideration of morality.\"",
      author: "Michael Tolkin",
      affiliation: "author of <i>The Player</i>"
    }
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteOffset, setQuoteOffset] = useState(0);

  useEffect(() => {
    const currentQuote = quotes[quoteIndex].quote;

    // Function to type the quote
    const typeQuote = () => {
      if (quoteOffset < currentQuote.length) {
        setQuoteOffset(quoteOffset + 1);
      } else {
        // Move to the next quote after typing once
        setQuoteOffset(0);
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }
    };

    // Start typing when the component mounts
    const typingInterval = setInterval(typeQuote, 90);

    return () => {
      clearInterval(typingInterval);
    };
  }, [quoteIndex, quoteOffset, quotes]);

  const currentQuote = quotes[quoteIndex];
  const animatedQuote = currentQuote.quote.substr(0, quoteOffset);

  const affiliationMarkup = { __html: currentQuote.affiliation };



  return (
    <div className="hero-container">
        <section id="quotes-section" className="quotes--section">
        <div className="quotes">
          <p className="quote">{animatedQuote}</p>
          <p className="author">~ {currentQuote.author}</p>
          <p className="affiliation" dangerouslySetInnerHTML={affiliationMarkup}></p>
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
