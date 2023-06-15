import React from "react";
import { useNavigate } from 'react-router-dom';
import "../css/Consultation.css";

const Consultation = () => {

  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate("/contact")
  }

    return (
        <div className="consult-container">
          <div className="consult-image"></div>
          <div className="consult-text">
            <h2>Do you need a consultation?</h2>
            {/* <p>Express can give you lots of advantages, from which you will surely benefit.</p> */}
            <button onClick={handleOnClick}>Contact Us</button>
          </div>
        </div>
      );
    };
  export default Consultation;