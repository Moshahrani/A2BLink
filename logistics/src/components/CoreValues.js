import React from "react";
import "../css/CoreValues.css";

const CoreValues = () => {
  return (
    <div className="core-container">
      <h1>Core Values</h1>
      <div className="core-subcontainers">
        <div className="core-subcontainer">
          <span>Action Oriented</span>
          <div className="core-subtext" style={{ backgroundColor: "#8c52ff" }}>
            <p>
              Being action-oriented defines our culture, propelling us towards
              tangible results and impactful achievements. Rather than dwelling
              on challenges, we take decisive steps to overcome obstacles and
              seize opportunities.
            </p>
          </div>
        </div>
        <div className="core-subcontainer">
          <span>Expertise</span>
          <div className="core-subtext">
            <p>
              Expertise forms the bedrock of our success, elevating us to
              industry leaders. Through relentless learning and experience, we
              cultivate unrivaled proficiency in our domain. Embracing expertise
              empowers us to solve complex challenges, offering unparalleled
              solutions to our clients.
            </p>
          </div>
        </div>
        <div className="core-subcontainer">
          <span>Predictable</span>
          <div className="core-subtext">
            <p>
              Through robust systems and data-driven insights, we reduce
              uncertainties and improve outcomes. Embracing predictability
              empowers us to make informed decisions and exceed expectations,
              setting new standards for reliability and trustworthiness.
            </p>
          </div>
        </div>
        <div className="core-subcontainer">
          <span>Do More</span>
          <div className="core-subtext" style={{ backgroundColor: "#8c52ff" }}>
            <p>
              "Doing More" drives unparalleled efficiency and customer
              satisfaction. Challenging norms and embracing innovation unlocks
              untapped potential, optimizing processes and timely deliveries. We
              redefine excellence and elevate logistics standards by embracing
              the power of doing more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
