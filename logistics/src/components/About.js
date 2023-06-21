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
              Our journey began with a deep appreciation for the complexities
              and challenges faced by organizations in managing their supply
              chains effectively. Recognizing the pivotal role of logistics, we
              have honed our expertise to deliver tailored solutions that
              optimize the flow of goods, minimize costs, and maximize
              efficiency.
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
              At A2B Link, we recognize the transformative impact of data
              analytics in the logistics industry. By leveraging advanced
              analytical tools and techniques, we dive deep into your supply
              chain data to uncover valuable insights and patterns. These
              insights enable us to optimize routes, streamline operations, and
              make data-driven decisions that drive efficiency and cost savings.
              With our data analytics expertise, we empower you to stay one step
              ahead in an ever-changing market.
              <br></br>We embrace an agile approach to logistics management,
              understanding that adaptability and responsiveness are paramount
              in today's fast-paced business landscape. Our agile methodologies
              enable us to quickly adapt to market fluctuations, unforeseen
              challenges, and shifting customer demands. By staying nimble and
              flexible, we ensure that your supply chain remains optimized,
              resilient, and ready to seize new opportunities.
              <br></br> At the heart of everything we do is our unwavering
              customer focus. We believe that your success is our success, and
              we are committed to understanding your unique logistical
              challenges, goals, and requirements. By actively listening to your
              needs, we develop tailored solutions that align with your
              objectives and deliver tangible results. We collaborate closely
              with you, providing transparent communication, proactive
              problem-solving, and personalized attention at every step of the
              journey.
            </p>
          </div>
        </div>
        <div className="about-subcontainer">
          <div className="about-text">
            <h2>The A2B Experience</h2>
            <p>
              Welcome to A2B Link, a company that combines the power of data
              analytics, an agile approach to logistics management, and
              unwavering customer focus to deliver exceptional supply chain
              solutions.
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
