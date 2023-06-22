import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";
import "../css/FourPoints.css";
import FullTruck from "../assets/FullTruckload.jpg";
import LessTruck from "../assets/LessThanTruckload.jpg";
import AirFreight from "../assets/AirFreight.jpg";
import Intermodal from "../assets/Intermodal.jpg";

const FourPoints = () => {
  const [showModal, setShowModal] = useState(false);
  const [freightType, setFreightType] = useState(null);

  const handleModalToggle = (freightType) => {
    setFreightType(freightType);
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="fourstep-container">
        <div className="info-box">
          <div className="info-row">
            <div
              className="info-container"
              onClick={() => handleModalToggle("Full Truckload")}
            >
              <span>Full Truckload</span>
              <div className="image-overlay">
                <img className="four-image" src={FullTruck} alt="semi-truck" />
                <div className="overlay-text">Contact us now</div>
              </div>
              <p>
                Efficient and cost-effective shipping solution with exclusive
                use of a full truckload for your cargo
              </p>
            </div>
            <div
              className="info-container"
              onClick={() => handleModalToggle("Less Than Truckload")}
            >
              <span>Less Than Truckload</span>
              <div className="image-overlay">
              <img className="four-image" src={LessTruck} alt="box truck" />
              <div className="overlay-text">Contact us now</div>
              </div>
              <p>
                Flexible shipping option for smaller loads, sharing truck space
                and costs with other shipments
              </p>
            </div>
          </div>
          <div className="info-row">
            <div
              className="info-container"
              onClick={() => handleModalToggle("Air Freight")}
            >
              <span>Air Freight</span>
              <div className="image-overlay">
              <img className="four-image" src={AirFreight} alt="airplane" />
              <div className="overlay-text">Contact us now</div>
              </div>
              <p>
                Swift and reliable transportation via air for time-sensitive
                shipments across domestic and international destinations
              </p>
            </div>
            <div
              className="info-container"
              onClick={() => handleModalToggle("Intermodal")}
            >
              <span>Intermodal</span>
              <div className="image-overlay">
              <img
                className="four-image"
                src={Intermodal}
                alt="different types of trucks"
              />
               <div className="overlay-text">Contact us now</div>
              </div>
              <p>
                Versatile shipping solution that seamlessly combines multiple
                modes of transport, maximizing efficiency and cost-effectiveness
                for your cargo
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleModalToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Get in Touch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm
            initialFreightType={freightType}
            handleModalClose={handleModalToggle}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalToggle}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FourPoints;
