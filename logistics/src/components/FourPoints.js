import "../css/FourPoints.css";
import FullTruck from "../assets/FullTruckload.jpg";
import LessTruck from "../assets/LessThanTruckload.jpg";
import AirFreight from "../assets/AirFreight.jpg";
import Intermodal from "../assets/Intermodal.jpg";

const FourPoints = () => {
  return (
    <div>
      <div className="fourstep-container">
        {/* <div className="fourstep-main-text">
          <div className="fourstep-text">
            One unified marketplace. Various modes for what you need.
          </div>
        </div> */}
        <div className="info-box">
          <div className="info-row">
            <div className="info-container">
              <span>Full Truckload</span>
              <img className="four-image" src={FullTruck} alt="semi-truck" />
              <p>
                Efficient and cost-effective shipping solution with exclusive
                use of a full truckload for your cargo
              </p>
            </div>
            <div className="info-container">
              <span>Less Than Truckload</span>
              <img className="four-image" src={LessTruck} alt="box truck"/>
              <p>
                Flexible shipping option for smaller loads, sharing truck space
                and costs with other shipments
              </p>
            </div>
          </div>
          <div className="info-row">
            <div className="info-container">
              <span>Air Freight</span>
              <img className="four-image" src={AirFreight} alt="airplane"/>
              <p>
                Swift and reliable transportation via air for time-sensitive
                shipments across domestic and international destinations
              </p>
            </div>
            <div className="info-container">
              <span>Intermodal</span>
              <img className="four-image" src={Intermodal} alt="different types of trucks"/>
              <p>
                Versatile shipping solution that seamlessly combines multiple
                modes of transport, maximizing efficiency and cost-effectiveness
                for your cargo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourPoints;
