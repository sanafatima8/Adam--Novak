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
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
              </div>
              {item.buttonText && (
                <div className="button-columns">
                  <div className="column">
                    <p className="text-sm portfolio--link">
                      <a href={item.Link ? item.Link : item.link} target="_blank" rel="noopener noreferrer">
                        <button className="btn-1">
                          <span>Read</span>
                          <span>{item.buttonText}</span>
                        </button>
                      </a>
                    </p>
                  </div>
                  <div className="column">
                    {item.additionalButtons &&
                      item.additionalButtons.map((button, buttonIndex) => (
                        <p key={buttonIndex} className="text-sm portfolio--link">
                          <a href={button.link} target="_blank" rel="noopener noreferrer">
                            <button className="btn-2">
                              <span>Read</span>
                              <span>{button.text}</span>
                            </button>
                          </a>
                        </p>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
