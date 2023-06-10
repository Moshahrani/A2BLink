import React, { useEffect, useRef } from "react";
import FourPoints from "./FourPoints";
import Consultation from "./Consultation";
import ThreeStep from "./ThreeStep";
import Contact from "./Contact";
import "../css/Home.css";
import Cargo from "../assets/Cargo.mp4";

const Home = () => {

  const videoRef = useRef();

  // video should autoplay across all devices and screen sizes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const styles = {
    position: "relative",
    overflow: "hidden",
    height: "90vh",
  };

  const videoStyles = {
    position: "absolute",
    width: "100%",
    left: "50%",
    top: "50%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
  };

  return (
    <div>
      <div style={styles}>
        <video
          ref={videoRef}
          src={Cargo}
          // autoPlay="autoplay"
          playsInLine="playsinline"
          loop="true"
          muted="true"
          style={videoStyles}
        />
        <div className="intro-container">
          <div className="opening-statement">
            <h1 className="statement">We Keep Your Freight Moving!</h1>
            <h2 className="mission-statement">
              Access to thousands of qualified carriers!
            </h2>
          </div>
        </div>
      </div>
      <FourPoints />
      <Consultation />
      <ThreeStep />
      <Contact />
    </div>
  );
};

export default Home;
