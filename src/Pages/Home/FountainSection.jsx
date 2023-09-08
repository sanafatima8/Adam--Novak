
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


export default function FountainSection() {
  const quotes = [
    {
        quote: "\" A dark unforgettable tour inside the belly of the Hollywood Beast. Novak knows this world, and it shows. \"",
        author: "D.B. Weiss",
        affiliation: "creator or HBO's Game of Thrones"
    },
    // ... Add other quotes ...
];
   const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteOffset, setQuoteOffset] = useState(0);
  const [forwards, setForwards] = useState(true);

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  useEffect(() => {
    let interval;
    
    if (inView) {
      interval = setInterval(() => {
        if (forwards) {
          if (quoteOffset >= quotes[quoteIndex].quote.length) {
            clearInterval(interval); // Stop typing after typing the full quote
          } else {
            setQuoteOffset(quoteOffset + 1);
          }
        } else {
          if (quoteOffset === 0) {
            setForwards(true);
            if (quoteIndex === quotes.length - 1) {
              clearInterval(interval); // Stop typing after typing the last quote
            } else {
              setQuoteIndex((quoteIndex + 1) % quotes.length);
            }
          } else {
            setQuoteOffset(quoteOffset - 1);
          }
        }
      }, 70);
    } else {
      clearInterval(interval); // Clear interval if not in view
    }

    return () => {
      clearInterval(interval);
    };
  }, [quoteIndex, quoteOffset, forwards, inView, quotes]);

  const currentQuote = quotes[quoteIndex];
  const animatedQuote = currentQuote.quote.substr(0, quoteOffset);

  return (
    <div className="hero-container">
      <section id="quotes-section" className="quotes--section">
        <div className="quotes" ref={ref}>
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
