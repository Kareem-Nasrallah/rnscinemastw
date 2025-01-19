import { useLocation } from "react-router-dom";
import "./nowShowing.scss";

type movies = {
  id: number;
  name: string;
  image: {
    medium: string;
  };
  premiered: string;
  genres: string[];
};

const NowShowing: React.FC<{
  moviesImg: movies[];
  title: string;
  areaStart: number;
  areaEnd: number;
}> = ({ moviesImg, title, areaStart, areaEnd }) => {
  const location = useLocation();

  const isComingSoon = location.pathname == "/coming-soon";
  console.log(isComingSoon);
  return (
    <div id="nowShowing" className="container">
      <h2 className="sideTitle">{title}</h2>
      <div id="showingMovies">
        {moviesImg.slice(areaStart, areaEnd).map((movie) => (
          <a key={movie.id} href="#" title={movie.name}>
            {isComingSoon && <div className="premiered">{movie.premiered}</div>}
            <img src={movie.image.medium} alt={movie.name} />
            <div>
              <h3>{movie.name}</h3>
              <p>{movie.genres.join(" - ")}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NowShowing;
