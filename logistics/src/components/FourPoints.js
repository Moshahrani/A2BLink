import "../css/FourPoints.css";
import air from "../assets/air.jpeg";
import boxtruck from "../assets/boxtruck.jpeg";
import semi from "../assets/semi.jpeg";
import intermodal from "../assets/intermodal.jpeg";

const FourPoints = () => {
  return (
    <div>
      <div className="fourstep-container">
        <div className="fourstep-main-text">
          <div className="fourstep-text">
            One unified marketplace. Various modes for what you need.
          </div>
        </div>
        <div className="info-box">
          <div className="info-row">
            <div className="info-container">
              <span>Full Truckload</span>
              <img className="four-image" src={semi} alt="Image 1" />
              <p>
                "Efficient and cost-effective shipping solution with exclusive
                use of a full truckload for your cargo."
              </p>
            </div>
            <div className="info-container">
              <span>Less Than Truckload</span>
              <img className="four-image" src={boxtruck} alt="Image 2" />
              <p>
                "Flexible shipping option for smaller loads, sharing truck space
                and costs with other shipments."
              </p>
            </div>
          </div>
          <div className="info-row">
            <div className="info-container">
              <span>Air Freight</span>
              <img className="four-image" src={air} alt="Image 3" />
              <p>
                "Swift and reliable transportation via air for time-sensitive
                shipments across domestic and international destinations."
              </p>
            </div>
            <div className="info-container">
              <span>Intermodal</span>
              <img className="four-image" src={intermodal} alt="Image 4" />
              <p>
                "Versatile shipping solution that seamlessly combines multiple
                modes of transport, maximizing efficiency and cost-effectiveness
                for your cargo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourPoints;