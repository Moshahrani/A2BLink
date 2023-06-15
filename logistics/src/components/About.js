import Footer from "./Footer";
import AboutUs from "../assets/AboutUs.jpeg";
import CoreValues from "../assets/CoreValues.jpeg";
import TheA2B from "../assets/TheA2B.jpeg";
import "../css/About.css";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-subcontainer">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Our journey began with a simple idea - to leverage the power of
              information tehcnology to transform the way businesses operate. We
              recognized the need for innovative solutions that would enhance
              connectivity, streamline processes, and enable organizations to
              stay ahead of the competition.
            </p>
          </div>
          <div className="about-image-container">
          <img src={AboutUs} className="about-image" alt="Image 1" />
          </div>
        </div>
        <div className="about-subcontainer">
        <div className="about-image-container">
          <img src={CoreValues} className="about-image" alt="Image 2" />
          </div>
          <div className="about-text">
            <h2>Core Values</h2>
            <p>
              Our core strengths lie in our expertise in data analytics. By
              harnessing the power of data, we help our clients gain valuable
              insights into their operations, enabling them to make informed
              decisions and drive growth. We believe that data-driven
              decision-making is crucial in today's dynamic business
              environment, and we continuously invest in cutting-edge analytics
              techniques to stay at the forefront of the industry. Agile
              methodologies and project management are at the heart of our
              operations. We embrace agility to adapt quickly to changing market
              conditions and deliver solutions that align with our clients'
              evolving needs. Our experienced project managers ensure that every
              project is executed efficiently, on time and within budget,
              providing our clients with peace of mind and confidence in our
              abilities.
            </p>
          </div>
        </div>
        <div className="about-subcontainer">
          <div className="about-text">
            <h2>The A2B Experience</h2>
            <p>
              We are here to bridge gaps, optimize operations, and empower
              businesses to thrive in the interconnected world. Join us on this
              exciting journey as we transform supply chain processes and help
              businesses reach new heights of success.
            </p>
          </div>
          <div className="about-image-container">
          <img src={TheA2B} className="about-image" alt="Image 3" />
           </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default About;
