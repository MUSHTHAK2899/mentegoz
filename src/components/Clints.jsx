import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import data

const Clints = () => {
  return (
    <>
      <div className="mx-auto container p-10 mt-16 ">
        <h1 className="text-center text-gray-500 font-semibold text-3xl tracking-wide">
          Our Clients
        </h1>
        <div className="p-16 ">
          <Swiper
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            className="mySwiper"
          >
            <div>
              <SwiperSlide>
                <img
                  src="https://www.mentegoz.com/img/partners/cosmos.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.mentegoz.com/img/partners/arifassociat.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.mentegoz.com/img/partners/olive.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.mentegoz.com/img/partners/baking60.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.mentegoz.com/img/partners/aishwarya.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.mentegoz.com/img/partners/jdt.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.mentegoz.com/img/partners/tallmen.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.mentegoz.com/img/partners/kraftwagon.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.mentegoz.com/img/partners/vaayo.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.mentegoz.com/img/partners/naturals.jpg"
                  alt=""
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Clints;
