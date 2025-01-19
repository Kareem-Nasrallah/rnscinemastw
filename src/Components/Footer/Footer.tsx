import "./footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div id="socialIc">
        <a href="#">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" className="instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
      <div>
        <a href="#">About Us</a>
        <span> • </span>
        <a href="#">Privacy Policy</a>
      </div>
      <div>
        <a href="#">Refunds & Exchanges</a>
        <span> • </span>
        <a href="#">Terms of Service</a>
      </div>
      <div className="copyRghit">
        © 2025 All Rights Reserved By Renaissance Cinemas
      </div>
    </div>
  );
};

export default Footer;
