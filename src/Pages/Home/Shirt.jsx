
import React, {  useRef , useEffect } from 'react';

export default function Shirt() {
    const animatedElementRef = useRef(null);

    useEffect(() => {
      const animatedElement = animatedElementRef.current;
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust this threshold as needed
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the "fade-in" class to trigger the animation
            animatedElement.classList.add('image-animation');
          }
        });
      }, observerOptions);
  
      // Start observing the element when the component mounts
      observer.observe(animatedElement);
  
      // Clean up the observer when the component unmounts
      return () => {
        observer.disconnect();
      };
    }, []);
  



  return (
  

    
    <div className="hero-container2"  >

    <section id="TShirt" className="about--section">
    
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">  
        <h1 className="skills-section--heading">Swag</h1>
          <p className="hero--section-description">
         
               Show your support and nab some swag!
                </p>
                

        </div>
      <br />
      <br />
      <a href="https://www.funnyshirts.org/design/4142349/Rat+Park+w%2F+back" target="_blank">
      <button className="btn btn-primary">
      <span>Buy Swag</span>
         </button>
      </a>
       
      </div>
      <div className="about--section--img   image-animation" id="animatedElement" ref={animatedElementRef}  >
        <img src="./img/rat_park_shirt.png" alt="About Me" />
        </div>
    </section>
    </div>

  );
}
