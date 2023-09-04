import React from "react";
import data from "../../data/index.json";

export default function Excerpts() {
  return (
    <section className="portfolio--section" id="Excerpts">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">Excerpts</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        <div className="portfolio--section--cards">
          {data?.portfolio?.map((item, index) => (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--card-inner">
                {/* Card Image */}
                <div className="portfolio--section--img">
                  <img src={item.src} alt="Placeholder" />
                </div>
  
                {/* Card Content */}
                <div className="portfolio--section--card--content">
                  <h3 className="portfolio--section--title">{item.title}</h3>
  
                  {/* Buttons */}
                  <div className="portfolio--buttons">
                    {item.buttonText && (
                      <p className="text-sm portfolio--link">
                        <a href={item.Link ? item.Link : item.link} target="_blank" rel="noopener noreferrer">
                          <button className="btn-1">
                            <span>{item.buttonText}</span>
                          </button>
                        </a>
                      </p>
                    )}
  
                    {item.additionalButtons &&
                      item.additionalButtons.map((button, buttonIndex) => (
                        <p key={buttonIndex} className="text-sm portfolio--link">
                          <a href={button.link} target="_blank" rel="noopener noreferrer">
                            <button className="btn-2">
                              <span>{button.text}</span>
                            </button>
                          </a>
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}
