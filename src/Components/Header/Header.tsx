import { useEffect, useState } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [opeanMenu, sitOpeanMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  const isHomeTheme = location.pathname == "/";

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
    <header className={isHomeTheme ? "HomeTheme" : ""}>
      <div className={opeanMenu ? "container" : "container maxHight"}>
        <div id="logoMenu">
          <a href="#">
            {screenWidth > 576 ? (
              <img src={isHomeTheme ? "./logo.png" : "./logo_dark_top.png"} />
            ) : (
              <img src={isHomeTheme ? "./logo_mobile.png" : "./ico.png"} />
            )}
          </a>
          <i
            className={`fa-solid ${opeanMenu ? "fa-xmark" : "fa-bars"}`}
            onClick={() => {
              sitOpeanMenu((pre) => !pre);
            }}
          ></i>
        </div>
        <menu>
          <ul
            className={!opeanMenu && screenWidth < 994 ? "" : "translateMenu"}
          >
            <li>
              <Link
                onClick={() => {
                  sitOpeanMenu(false);
                }}
                to="/"
              >
                now showing
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  sitOpeanMenu(false);
                }}
                to="/cinemas"
              >
                cinemas
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  sitOpeanMenu(false);
                }}
                to="/coming-soon"
              >
                coming soon
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  sitOpeanMenu(false);
                }}
                to="/contact"
              >
                contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  sitOpeanMenu(false);
                }}
                className={isHomeTheme ? "HomeTheme" : ""}
              >
                <i className="fa-regular fa-user"></i> {"  "} log in
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  sitOpeanMenu(false);
                }}
                className={`arabic ${isHomeTheme ? "HomeTheme" : ""}`}
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
