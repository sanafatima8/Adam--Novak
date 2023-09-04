
import React, { useState, useEffect } from 'react';

export default function Adam() {


  return (
    <div className="hero-container2" >

    <section id="Adam" className="about--section">
    <div className="about--section--img" >
        <img src="./img/adam_novak.jpg" alt="About Me" id="animatedImage"  />
        </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">Adam Novak</h1>
          <p className="hero--section-description">
         
          Adam Novak is the author of the novels Rat Park, The Non-Pro, 
          Freaks of the Industry, and Take Fountain.
          He divides his time between Beachwood Canyon and Fort Washington, Maryland. 
           </p>
                

        </div>
      <br />
      <br />
      <a href="mailto:anovak99@icloud.com" target="_blank">
      <button className="btn btn-primary">
      <span>Coffee? </span><span>Email Me</span>
         </button>
      </a>
       
      </div>
    
    </section>
    </div>
  );
}
