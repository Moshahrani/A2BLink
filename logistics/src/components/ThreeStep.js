import "../css/ThreeStep.css";

const ThreeStep = () => {
  return (
    <div className="Threestep-component">
      <div className="Threestep-image"></div>
      <div className="Threestep-container">
        <h2 className="Threestep-intro">
          One unified marketplace. Various modes for what you need.
        </h2>
        <h2>Solution in 3 Easy Steps </h2>
        <div className="sub-container-wrapper">
          <div className="sub-container">
            <div className="step">1</div>
            <div className="sub-content">
              <h3>Requirements Gathering</h3>
              <p>
                We identify your freight requirements including type, volume,
                weight, locations, and handling.
              </p>
            </div>
          </div>
          <div className="sub-container">
            <div className="step">2</div>
            <div className="sub-content">
              <h3>Carrier Match</h3>
              <p>We use our network of the top 1% of carriers.</p>
            </div>
          </div>
          <div className="sub-container">
            <div className="step">3</div>
            <div className="sub-content">
              <h3>End to End Solution</h3>
              <p>
                We manage the documentation, transportation, tracking, and final
                delivery of your freight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeStep;
