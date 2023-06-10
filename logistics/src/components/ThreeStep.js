import "../css/ThreeStep.css"; // Import the CSS file for styling

const ThreeStep = () => {
  return (
    <div className="Threestep-component">
      <div className="Threestep-image"></div>
      <div className="Threestep-container">
        <h2>Solution in 3 Easy Steps </h2>
        <div className="sub-container-wrapper">
          <div className="sub-container">
            <div className="step">1</div>
            <div className="sub-content">
              <h3>Detail Your Requirements</h3>
              <p>
                Identify your freight specifics including goods type, volume,
                weight, locations, and handling instructions.
              </p>
            </div>
          </div>
          <div className="sub-container">
            <div className="step">2</div>
            <div className="sub-content">
              <h3>Contact Us</h3>
              <p>
                Reach us via our website, email, or phone with the details of
                your freight requirements
              </p>
            </div>
          </div>
          <div className="sub-container">
            <div className="step">3</div>
            <div className="sub-content">
              <h3>Get Your Plan</h3>
              <p>Receive a personalized service plan tailored to your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeStep;
