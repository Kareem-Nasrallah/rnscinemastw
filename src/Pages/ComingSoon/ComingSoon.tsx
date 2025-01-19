import { useEffect, useState } from "react";
import Ad from "../../Components/Ad/Ad";
import NowShowing from "../../Components/NowShowing/NowShowing";
import axios from "axios";

const ComingSoon = () => {
  const [moviesImg, setMoviesImg] = useState([]);

  const axiosFunc = async () => {
    try {
      const response = await axios.get("http://api.tvmaze.com/shows");
      setMoviesImg(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axiosFunc();
  }, []);

  return (
    <div id="comingSoon">
      <Ad />
      <NowShowing
        moviesImg={moviesImg}
        title="Coming Soon"
        areaStart={19}
        areaEnd={26}
      />
    </div>
  );
};

export default ComingSoon;
