import React, { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import "../css/Contact.css";
import Unpacking from "../assets/Unpacking.mp4";

const Contact = () => {
  const videoRef = useRef();

  // video should autoplay across all devices and screen sizes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const videoStyles = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <ContactForm />
      </div>
      <div className="packaging-container">
        <video
          ref={videoRef}
          src={Unpacking}
          // autoPlay="autoplay"
          playsInLine="playsinline"
          loop="true"
          muted="true"
          style={videoStyles}
        />
        <div className="video-text">
          <p>How can we help you?</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
