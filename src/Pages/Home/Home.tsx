import SwiperCom from "./SwiperCom/SwiperCom";
import Ad from "../../Components/Ad/Ad";
import axios from "axios";
import { useEffect, useState } from "react";
import NowShowing from '../../Components/NowShowing/NowShowing'
import Cinemas from "../Cinemas/Cinemas";

function Home() {
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
    <>
      <SwiperCom moviesImg={moviesImg}/>
      <Ad />
      <NowShowing moviesImg={moviesImg} title="Now Showing" areaStart={0} areaEnd={19} />
      <Cinemas/>
    </>
  );
}

export default Home;
