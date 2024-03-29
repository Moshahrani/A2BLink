import "../css/Footer.css";

// function Footer() {
//   return (
//     <div className="footer">
//       <div className="logo-container">
//         {/* <Logo /> */}
//       </div>
//       <div className="copyright-container">
//         <p>© {new Date().getFullYear()} A2B Link. All rights reserved.</p>
//       </div>
//       {/* <div className="social-media-container">
//         <Link to="/facebook"><SocialMediaIcon type="facebook" /></Link>
//         <Link to="/twitter"><SocialMediaIcon type="twitter" /></Link>
//         <Link to="/linkedin"><SocialMediaIcon type="linkedin" /></Link>
//       </div> */}
//     </div>
//   );
// }

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} A2B Link. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
