
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


export default function AudioSection() {
    const quotes = [
        {
            quote: "\"Adam Novak has a merciless eye for a society in which striving replaces every consideration of morality. \"",
            author: "Michael Tolkin",
            affiliation: "author of The Player"
        }
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

    <section id="Audio" className="about--section">
    <div className="about--section--img">
        <img src="./img/rat_park_audio_book.jpg" alt="About Me" id="animatedImage3" />
        </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">Audio book</h1>
          <p className="hero--section-description">
         
          Enter Rat Park at your own risk. Lose the cage. Find yourself. An L.A. power couple orders an A.I. sex droid to escape their marital prison. What happens to them could happen to you. With his fourth novel, Adam Novak shows us how it takes a village of automatons to augment your humanity, feed your deceptive compulsive sexual addiction, and forget why you ever got married in the first place. 
                </p>
                

        </div>
      <br />
      <br />
      <a href="https://a.co/d/a6r7baw " target="_blank">
      <button className="btn btn-primary">
      <span>Hurry! </span><span>Listen Now</span>
         </button>
      </a>
       
      </div>
    
    </section>
    </div>
  );
}
