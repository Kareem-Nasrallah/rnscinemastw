import { useLocation } from "react-router-dom";

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
    <div id="nowShowing" className="container mx-auto 2xl:px-32 xl:px-24 lg:px-8 md:px-8 sm:px-14 px-2.5">
      <h2 className="text-5xl text-neutral-900 font-medium my-4">{title}</h2>
      <div id="showingMovies" className="grid grid-cols-2 gap-5 mb-12 justify-start items-center md:grid-cols-3 xl:grid-cols-4">
        {moviesImg.slice(areaStart, areaEnd).map((movie) => (
          <a key={movie.id} href="#" title={movie.name} className="rounded-md mb-2.5 shadow-lg shadow-neutral-200 relative transition-all hover:bg-blue-50">
            {isComingSoon && <div className="absolute bg-fuchsia-700 text-white top-8 right-5 p-2.5 font-medium rounded-md">{movie.premiered}</div>}
            <img src={movie.image.medium} alt={movie.name} className="w-full rounded-md" />
            <div className="px-2.5">
              <h3 className="text-lg my-2.5">{movie.name}</h3>
              <p className="text-sm my-2.5 text-neutral-500">{movie.genres.join(" - ")}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NowShowing;
