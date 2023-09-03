
import React, { useState, useEffect } from 'react';

export default function Podcast() {


  return (
    
     <div className="hero-container">
      <section id="Podcast" className="about--section">
    
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">Podcasts</h1>
        <br />
       <p className="section--title">Rare Bird Radio - Conversation with Tyler Knigh</p>
        </div>

      <br />
      <div>
      <a href= "https://soundcloud.com/rarebirdlit/adam-novak-in-conversation-with-tyler-knight" target="_blank">
      <button className="btn-2">
      <span>Listen</span><span>SoundCloud</span>
         </button>
      </a>
      
      <a href="https://blog.finaldraft.com/write-on-with-wmes-head-of-story-adam-novak?hs_amp=true " target="_blank">
      <button className="btn-2 with-gap">
      <span>Listen</span><span>iTunes</span>
         </button>
      </a>
      </div>

      <br />
      <p className="section--title">Final Draft - Freaks of the Industry</p>
     <br />
      <a href="https://blog.finaldraft.com/write-on-with-wmes-head-of-story-adam-novak?hs_amp=true " target="_blank">
      <button className="btn-2">
      <span>Listen</span><span>Final Draft</span>
         </button>
      </a>
     <br />
       
     <br />
     <p className="section--title">What Bubbles Up - Rat Park</p>
      <br />
      <a href="https://open.spotify.com/episode/4V7tHEKMPM53G213WHPDSr "  target="_blank">
      <button className="btn-2">
      <span>Listen</span><span>Spotify</span>
         </button>
      </a>
     <br />


      </div>
      <div className="about--section--img">
        <img src="./img/podcast.png" alt="About Me"  id="animatedImage"  />
        </div>
    
    </section>
    </div>
  );
}
