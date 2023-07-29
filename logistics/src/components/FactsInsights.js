import React from "react";
import "../css/FactsInsights.css";

const FactsInsights = () => {
    return (
      <div className="facts-container">
        <h1>Solution in 3 Easy Steps</h1>
        <div className="fact-box-container">
          <div className="fact-box">
            <span>Requirements Gathering</span>
            <p>
              We identify your freight requirements including type, volume,
              weight, locations, and handling.
            </p>
          </div>
          <div className="fact-box">
            <span>Carrier Match</span>
            <p>We use our network of the top 1% of carriers.</p>
          </div>
          <div className="fact-box">
            <span>End to End Solution</span>
            <p>
              We manage the documentation, transportation, tracking, and final
              delivery of your freight.
            </p>
          </div>
        </div>
      </div>
    );
  };
  

export default FactsInsights;
