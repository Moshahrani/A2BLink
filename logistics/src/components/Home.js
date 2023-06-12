import React, { useEffect, useRef } from "react";
import FourPoints from "./FourPoints";
import Consultation from "./Consultation";
import ThreeStep from "./ThreeStep";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import "../css/Home.css";
import Cargo from "../assets/Cargo.mp4";

const Home = () => {
  // user clicks on contact us and then scrolls down to contact form
  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    contactFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
    <div className="main-container">
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
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            zIndex: "-1",
          }}
        ></div>
        <div className="intro-container">
          <div className="opening-statement">
            <h1 className="statement">
              Revolutionizing the way freight is moved
            </h1>
          </div>
        </div>
      </div>
      <FourPoints />
      <Consultation />
      <ThreeStep />
      {/* <ContactForm ref={contactFormRef} /> */}
      <Footer />
    </div>
  );
};

export default Home;
