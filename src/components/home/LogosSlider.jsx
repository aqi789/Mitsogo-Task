import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import wolt from "../../assets/images/logos/wolt.svg";
import marriott from "../../assets/images/logos/marriott-intl.svg";
import merck from "../../assets/images/logos/merck.svg";
import costco from "../../assets/images/logos/costco.svg";
import saic from "../../assets/images/logos/saic.svg";
import hilton from "../../assets/images/logos/hilton.svg";
import group1 from "../../assets/images/logos/group1-automotive.webp";
import lowes from "../../assets/images/logos/lowes.svg";
import polaris from "../../assets/images/logos/polaris.svg";
import gorillas from "../../assets/images/logos/gorillas.svg";
import { Autoplay } from "swiper/modules";

const logos = [
  { src: wolt, alt: "Wolt" },
  { src: marriott, alt: "Marriott" },
  { src: merck, alt: "Merck" },
  { src: costco, alt: "Costco" },
  { src: saic, alt: "SAIC" },
  { src: hilton, alt: "Hilton" },
  { src: group1, alt: "Group 1 Automotive" },
  { src: lowes, alt: "Loves" },
  { src: polaris, alt: "Polaris" },
  { src: gorillas, alt: "Gorillas" },
];

const LogosSlider = () => {
  return (
    <section className="logos-slider pr-24 pl-24 w-full pt-20">
      <Swiper
        spaceBetween={1}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo.src} alt={logo.alt} className=" h-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LogosSlider;
