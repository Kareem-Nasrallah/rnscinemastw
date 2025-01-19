import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [opeanMenu, sitOpeanMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  // const linkStyle = {'p-1.5 transition-all ' + isHomeTheme? 'text-white hover:text-fuchsia-600':''}
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
    <header className={`py-2.5 ${isHomeTheme ? "absolute top-0 left-0 z-10 w-full backdrop:blur-sm backdrop:brightness-75" : ""}`}>
      <div className={`${opeanMenu ? "container" : "container "} m-auto flex justify-between items-center`}>
        <div id="logoMenu">
          <a href="#">
            <img src={isHomeTheme?"./logo.png":'./logo_dark_top.png'} width='126px' className="py-2" />
          </a>
          <i
            className={`fa-solid ${opeanMenu ? "fa-xmark" : "fa-bars"} ${screenWidth < 994 ? '':'hidden'}`}
            onClick={() => {
              sitOpeanMenu((pre) => !pre);
            }}
          ></i>
        </div>
        <menu>
          <ul
            className={`flex items-center justify-center gap-2.5 p-1 uppercase font-medium ${!opeanMenu && screenWidth < 994 ? "flex-col" : ""}`}
          >
            <li className="">
              <Link to="/" className={`p-1.5 transition-all ${isHomeTheme? 'text-white hover:text-fuchsia-600':''}`}>now showing</Link>
            </li>
            <li>
              <Link to="/cinemas"  className={`p-1.5 transition-all ${isHomeTheme? 'text-white hover:text-fuchsia-600':''}`}>cinemas</Link>
            </li>
            <li>
              <Link to="/coming-soon"  className={`p-1.5 transition-all ${isHomeTheme? 'text-white hover:text-fuchsia-600':''}`}>coming soon</Link>
            </li>
            <li>
              <Link to="/contact"  className={`p-1.5 transition-all ${isHomeTheme? 'text-white hover:text-fuchsia-600':''}`}>contact</Link>
            </li>
            <li>
              <button className={`border py-2 w-36 text-sm uppercase rounded-md hover:bg-fuchsia-600 ${isHomeTheme ? "border-white" : "border-black"}`}>
                <i className="fa-regular fa-user"></i> {"  "} log in
              </button>
            </li>
            <li>
              <button className={` ${isHomeTheme ? "" : ""}`}>
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
