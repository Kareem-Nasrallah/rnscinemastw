import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [opeanMenu, sitOpeanMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  const isHomeTheme = location.pathname == "/";

  const linkStyle = `p-1.5 transition-all text-neutral-800 hover:text-fuchsia-600 ${
    isHomeTheme ? "text-white" : ""
  }`;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  });

  return (
    <header
      className={`py-2.5 ${
        isHomeTheme
          ? "absolute top-0 left-0 z-10 w-full backdrop-blur-sm backdrop-brightness-75"
          : ""
      }`}
    >
      <div
        className={`${
          opeanMenu ? "container" : "container "
        } mx-auto flex justify-between items-center 2xl:px-32 xl:px-24 lg:px-16 md:px-8 sm:px-14 px-2.5`}
      >
        <div id="logoMenu">
          <a href="#">
            <img
              src={isHomeTheme ? "./logo.png" : "./logo_dark_top.png"}
              width="126px"
              className="py-2"
            />
          </a>
          <i
            className={`fa-solid ${opeanMenu ? "fa-xmark" : "fa-bars"} ${
              screenWidth < 994 ? "" : "hidden"
            }`}
            onClick={() => {
              sitOpeanMenu((pre) => !pre);
            }}
          ></i>
        </div>
        <menu>
          <ul
            className={`flex items-center justify-center gap-2.5 p-1 uppercase font-medium ${
              !opeanMenu && screenWidth < 994 ? "flex-col" : ""
            }`}
          >
            <li>
              <Link to="/" className={linkStyle}>
                now showing
              </Link>
            </li>
            <li>
              <Link to="/cinemas" className={linkStyle}>
                cinemas
              </Link>
            </li>
            <li>
              <Link to="/coming-soon" className={linkStyle}>
                coming soon
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkStyle}>
                contact
              </Link>
            </li>
            <li>
              <button
                className={`border  font-medium py-1.5 text-sm uppercase rounded-md hover:bg-fuchsia-600 ${
                  isHomeTheme ? "border-white text-white" : "border-black"
                } ${screenWidth < 1024? 'w-24':'w-36'}`}
              >
                <i
                  className={`fa-regular fa-user ${
                    isHomeTheme ? "border-white text-white" : "border-black"
                  }`}
                ></i>{" "}
                {"  "} log in
              </button>
            </li>
            <li>
              <button
                className={`arabic  font-medium border py-1.5 text-sm uppercase rounded-md hover:bg-fuchsia-600 ${
                  isHomeTheme ? "border-white text-white" : "border-black"
                } ${screenWidth < 1024? 'w-24':'w-36'}`}
              >
                العربية
              </button>
            </li>
          </ul>
        </menu>
      </div>
    </header>
  );
};

export default Header;
