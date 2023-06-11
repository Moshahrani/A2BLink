import "../css/Consultation.css";

const Consultation = ({ onContactUsClick }) => {
    return (
        <div className="consult-container">
          <div className="consult-image"></div>
          <div className="consult-text">
            <h2>Do you need a consultation?</h2>
            <p>Express can give you lots of advantages, from which you will surely benefit.</p>
            <button onClick={onContactUsClick}>Contact Us</button>
          </div>
        </div>
      );
    };
  export default Consultation;