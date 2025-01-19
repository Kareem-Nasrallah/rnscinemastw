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
  const buttonStyle = `text-sm py-2 px-3.5 rounded font-medium mx-1`;
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
    <div
      id="cinemas"
      className="container mx-auto 2xl:px-32 xl:px-24 lg:px-16 md:px-8 sm:px-14 px-2.5"
    >
      <h2 className="text-5xl text-neutral-900 font-medium mt-8 mb-6">
        Cinemas
      </h2>
      <div id="buttonsList" className="mb-12">
        <button
          className={`${buttonStyle} ${
            activeBtn === "all"
              ? "bg-fuchsia-700 text-white"
              : "bg-white border border-neutral-400"
          }`}
          onClick={() => handleBtnClick("all", cinemasData)}
        >
          All
        </button>
        <button
          className={`${buttonStyle} ${
            activeBtn === "cairo"
              ? "bg-fuchsia-700 text-white"
              : "bg-white border border-neutral-400"
          }`}
          onClick={() => handleBtnClick("cairo", cairoCinemas)}
        >
          Cairo
        </button>
        <button
          className={`${buttonStyle} ${
            activeBtn === "giza"
              ? "bg-fuchsia-700 text-white"
              : "bg-white border border-neutral-400"
          }`}
          onClick={() => handleBtnClick("giza", gizaCinemas)}
        >
          Giza
        </button>
        <button
          className={`${buttonStyle} ${
            activeBtn === "alexandria"
              ? "bg-fuchsia-700 text-white"
              : "bg-white border border-neutral-400"
          }`}
          onClick={() => handleBtnClick("alexandria", alexCinemas)}
        >
          Alexandria
        </button>
      </div>
      <div id="">
        {city.map((cinema) => (
          <a href="#" key={cinema.id} className={` ${cinema.city} ${apeare}`}>
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
