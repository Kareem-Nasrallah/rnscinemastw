import { useEffect, useState } from "react";
import cinemasData from "./cinemasData.ts";

const Cinemas = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  const [city, setCity] = useState(cinemasData);
  const [apeare, setApeare] = useState("");

  const handleBtnClick = (btn: string, arr: any) => {
    setActiveBtn(btn);
    setCity(arr);
  };

  const cairoCinemas = cinemasData.filter((cinema) => cinema.city === "Cairo");

  const gizaCinemas = cinemasData.filter((cinema) => cinema.city === "Giza");

  const alexCinemas = cinemasData.filter(
    (cinema) => cinema.city === "Alexandria"
  );

  useEffect(() => {
    setTimeout(() => setApeare("apeare"), 300);
    return () => {
      setApeare("");
    };
  }, [city]);

  return (
    <div id="cinemas" className="container">
      <h2 className="">Cinemas</h2>
      <div id="buttonsList">
        <button
          className={`${activeBtn === "all" ? "" : ""}`}
          onClick={() => handleBtnClick("all", cinemasData)}
        >
          All
        </button>
        <button
          className={`${activeBtn === "cairo" ? "" : ""}`}
          onClick={() => handleBtnClick("cairo", cairoCinemas)}
        >
          Cairo
        </button>
        <button
          className={`${activeBtn === "giza" ? "" : ""}`}
          onClick={() => handleBtnClick("giza", gizaCinemas)}
        >
          Giza
        </button>
        <button
          className={` ${
            activeBtn === "alexandria" ? "" : ""
          }`}
          onClick={() => handleBtnClick("alexandria", alexCinemas)}
        >
          Alexandria
        </button>
      </div>
      <div id="">
        {city.map((cinema) => (
          <a
            href="#"
            key={cinema.id}
            className={` ${cinema.city} ${apeare}`}
          >
            <div>
              <span>{cinema.location}</span>
              <h3>{cinema.name}</h3>
              <p>{cinema.categories.join(" - ")}</p>
            </div>
            <img src="cinemaCuted.jpg" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cinemas;
