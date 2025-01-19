const Footer = () => {
  const divStyle = "my-1 flex justify-center items-center";
  const iconsLinkStyle =
    "h-9 w-9 m-2 rounded-md bg-fuchsia-700 inline-flex justify-center items-center no-underline";
  const anchorStyle = "text-fuchsia-700 font-medium no-underline mx-2 text-sm"

  return (
    <div
      id="footer"
      className="pt-5 border-e-0 border-b-0 border-s-0 border-t border-solid border-neutral-300"
    >
      <div id="socialIc" className={divStyle}>
        <a href="#" className={iconsLinkStyle}>
          <i className="fa-brands fa-facebook-f text-white text-xl"></i>
        </a>
        <a href="#" className={iconsLinkStyle}>
          <i className="fa-brands fa-instagram text-white text-xl"></i>
        </a>
        <a href="#" className={iconsLinkStyle}>
          <i className="fa-brands fa-tiktok text-white text-xl"></i>
        </a>
      </div>
      <div className={divStyle}>
        <a href="#" className={anchorStyle}>About Us</a>
        <span className="text-neutral-600 text-xl"> • </span>
        <a href="#" className={anchorStyle}>Privacy Policy</a>
      </div>
      <div className={divStyle}>
        <a href="#" className={anchorStyle}>Refunds & Exchanges</a>
        <span className="text-neutral-600 text-xl"> • </span>
        <a href="#" className={anchorStyle}>Terms of Service</a>
      </div>
      <div className={`${divStyle} text-neutral-400 text-xs mb-0.5 mt-1.5`}>© 2025 All Rights Reserved By Renaissance Cinemas</div>
    </div>
  );
};

export default Footer;
