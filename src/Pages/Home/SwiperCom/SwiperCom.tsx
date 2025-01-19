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
      <div id="swiperDiv">
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
        >
          {moviesImg?.slice(1, 6).map((elImg) => (
            <SwiperSlide key={elImg.id} className="">
              <div>
                <div>
                  <p>Now Showing</p>
                  <h3>{elImg.name}</h3>
                  <button>Book Now</button>
                </div>
                <div
                  className=""
                  style={{ backgroundImage: `url(${elImg.image.original})` }}
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
