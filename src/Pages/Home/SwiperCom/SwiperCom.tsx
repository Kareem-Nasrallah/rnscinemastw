import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type movies = {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
};

const SwiperCom: React.FC<{ moviesImg: movies[] }> = ({ moviesImg }) => {
  return (
    <>
      <div id="swiperDiv" style={{ height: "75vh" }} className="bg-fuchsia-400">
        <Swiper
          id="swiper"
          modules={[Autoplay, Navigation, Pagination, A11y]}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          className="h-full"
        >
          {moviesImg?.slice(1, 6).map((elImg) => (
            <SwiperSlide key={elImg.id} className="">
              <div className="h-full">
                <div className="absolute top-1/2 right-3/4 -translate-x-44 translate-y-4 w-full">
                  <p className="text-sm text-white">Now Showing</p>
                  <h3
                  style={{textShadow:'0 2px #c026d3'}}
                   className="my-4 text-5xl font-bold text-white drop-shadow-md">
                    {elImg.name}
                  </h3>
                  <button className="font-semibold text-white py-2.5 px-16 text-base mt-2 rounded-md bg-fuchsia-600">Book Now</button>
                </div>
                <div
                  className="h-full mx-auto bg-cover max-w-screen-lg"
                  style={{
                    backgroundImage: `url(${elImg.image.original})`,
                    width: "70vw",
                    minWidth: "500px",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperCom;
