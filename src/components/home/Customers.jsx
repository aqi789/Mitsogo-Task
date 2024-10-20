import React from "react";
import Slider from "react-slick";
import chris from "../../assets/images/customers/chris-robinson.webp";
import dalibor from "../../assets/images/customers/dalibor-kruljac.webp";
import justin from "../../assets/images/customers/justin-modrak.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from "../../assets/images/home/next-arrow-icon-black.svg";
import prev from "../../assets/images/home/prev-arrow-icon-black.svg";

const Customers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <div className="">
        <button type="button" className="slick-prev">
          <img src={prev} alt="previous arrow" />
        </button>
      </div>
    ),
    nextArrow: (
      <div>
        <button type="button" className="slick-next p-10">
          <img src={next} alt="next arrow" />
        </button>
      </div>
    ),
  };

  return (
    <section className="" id="customers">
      <div className="w-[88%] mx-auto max-w-[1300px]">
        <h2 className="font-semibold text-[32px] md:text-[40px] text-center   text-[#020a19] pb-0 md:pb-[20px]">
          What our customers say
        </h2>
        <div className="max-w-[960px] pt-[40px] pb-[80px] relative mx-auto lg:pb-0">
          <Slider {...settings}>
            {[
              {
                img: justin,
                quote:
                  "Hexnode is of great value. Works great with Android and iOS!",
                name: "Justin Modrak",
                position: "Technology Coordinator",
                company: "East Troy Community School District",
              },
              {
                img: dalibor,
                quote:
                  "Most complete MDM solution I found, and I tested many of them, including major names.",
                name: "Dalibor Kruljac",
                position: "IT Manager",
                company: "",
              },
              {
                img: chris,
                quote: "An amazing service that exceeded my expectations!",
                name: "Chris Robinson",
                position: "Customer Success Manager",
                company: "",
              },
            ].map((customer, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row overflow-hidden rounded-[18px] relative group"
              >
                <div className="">
                  <img
                    src={customer.img}
                    alt={customer.name}
                    className="object-cover align-middle float-left"
                  />
                </div>
                <div className="max-w-[640px] bg-[#f7f7f7] flex justify-between flex-col grow float-right">
                  <div className="md:min-h-[160px] md:max-h-[135px] pb-10px  md:px-[40px] md:py-0 md:mt-[40px] flex flex-col justify-center">
                    <h4 className="text-[16px] md:text-left sm:text-[20px] md:text-[24px] sm:leading-[32px] text-center text-[#020a19] font-semibold ">
                      "{customer.quote}"
                    </h4>
                  </div>
                  <div className="px-[20px] py-[16px] md:px-[40px] md:py-b-5 border-t-[1px] border-white/30 flex flex-col justify-center items-center min-h-[73px] md:min-h-[120px] bg-[#020a19]/5">
                    <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold">
                      {customer.name}
                    </p>
                    {customer.position && (
                      <p className="text-center md:text-left w-full ">
                        {customer.position}
                      </p>
                    )}
                    {customer.company && (
                      <p className="text-center md:text-left w-full">
                        {customer.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Customers;
