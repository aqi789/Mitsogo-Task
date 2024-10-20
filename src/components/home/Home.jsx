import React from "react";
import Navbar from "../navbar/Navbar";
import banner from "../../assets/images/home/banner.webp";
import { FaGlobe } from "react-icons/fa6";
import WhyHexnodeCard from "./WhyHexnodeCard";
import FeaturesCard from "./FeaturesCard";
import MultiPlatform from "./MultiPlatform";
import Customers from "./Customers";
import LogosSlider from "./LogosSlider";
import Footer from "./Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import PricingTable from "./PricingTable";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),
});

const Home = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="scroll-smooth">
        <Navbar />

        <section className="bg-[#020A19] w-full pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pt-3 lg:pb-3 lg:px-16 px-4">
            <div className="lg:w-1/2 text-center lg:text-left px-4">
              <h4 className="text-slate-400">Unified Endpoint Management</h4>
              <h1 className="text-white text-3xl lg:text-5xl font-semibold mt-3">
                Gain control and visibility
                <br />
                over your endpoints
              </h1>
              <p className="text-white mt-5 mb-5 text-sm lg:text-base">
                Hexnode's UEM solution allows you to simplify
                <br />
                endpoint management and free up IT. Focus on the big picture
                while Hexnode works on the details.
              </p>

              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col lg:flex-row items-center justify-center lg:justify-start"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="pt-3 pb-3 pl-3 pr-10 lg:pr-28 rounded-md border-none outline-none mb-3 lg:mb-0 w-full lg:w-auto"
                />

                <button
                  type="submit"
                  className="bg-[#bb022a] rounded-md pt-3 pb-3 pr-5 pl-5 w-full lg:w-1/3 ml-0 lg:ml-3 uppercase text-white text-lg"
                >
                  Let's try it out!
                </button>
              </form>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 mt-1">{formik.errors.email}</p>
              ) : null}
            </div>

            <div className="relative mt-8 lg:mt-0">
              <img
                src={banner}
                alt="banner"
                className="w-full max-w-md lg:max-w-none"
              />

              <div className="absolute w-full max-w-[610px] mx-auto top-0 left-0 z-10">
                <div className="group flex bg-[#FCD598] rounded-[21px] p-[10px_20px_10px_45px] absolute mt-10 md:mt-20 left-[5%] lg:left-[13%] overflow-hidden z-20">
                  <div className="w-[33px] h-[33px] bg-white rounded-[21px] absolute left-[-10px] top-[50%] transform translate-y-[-50%] group-hover:scale-[20] transition-transform"></div>
                  <div className="w-[33px] h-[33px] flex justify-center items-center absolute left-[2px] top-[50%] transform translate-y-[-50%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="11"
                      viewBox="0 0 16 11"
                    >
                      <path
                        d="M1 5l5 5 9-9"
                        fill="none"
                        stroke="#db962c"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="text-[#020A19] text-[16px] z-50">
                    Password policy applied
                  </span>
                </div>

                <div className="group flex bg-[#C3E1E7] rounded-[21px] p-[10px_20px_10px_45px] absolute mt-40 md:mt-40 right-[-2%] overflow-hidden z-20">
                  <div className="w-[33px] h-[33px] bg-white rounded-[21px] absolute left-[-10px] top-[50%] transform translate-y-[-50%] group-hover:scale-[20] transition-transform"></div>
                  <div className="w-[33px] h-[33px] flex justify-center items-center absolute left-[2px] top-[50%] transform translate-y-[-50%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="11"
                      viewBox="0 0 16 11"
                    >
                      <path
                        d="M1 5l5 5 9-9"
                        fill="none"
                        stroke="#44aec4"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="text-[#020A19] text-[16px]">
                    TvOS Kiosk Active
                  </span>
                </div>

                <div className="group flex bg-[#BCDCBE] rounded-[21px] p-[10px_20px_10px_45px] absolute md:mt-60 right-[26%] mt-96 overflow-hidden z-20">
                  <div className="w-[33px] h-[33px] bg-white rounded-[21px] absolute left-[-10px] transform translate-y-[-50%] group-hover:scale-[20] transition-transform"></div>
                  <div className="w-[33px] h-[33px] flex justify-center items-center absolute left-[2px] top-[50%] transform translate-y-[-50%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="11"
                      viewBox="0 0 16 11"
                    >
                      <path
                        d="M1 5l5 5 9-9"
                        fill="none"
                        stroke="#35943b"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="text-[#020A19] text-[16px]">
                    Device Enrolled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#1A1C2B] text-white p-4 md:p-8 lg:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <div className="border-b md:border-b-0 lg:border-r border-[#565555] pb-8 md:pb-0 lg:pr-12">
            <div className="flex items-center justify-center lg:justify-start">
              <FaGlobe className="text-3xl mr-2" />
              <h4 className="uppercase text-2xl md:text-3xl font-medium">
                IDC
              </h4>
            </div>
            <p className="text-slate-300 text-sm mt-2 text-center lg:text-left">
              Hexnode is listed as a leader and a major player in IDC
              MarketScape UEM Vendors Assessment Reports 2024.
            </p>
          </div>

          <div className="border-b md:border-b-0 lg:border-r border-[#565555] pb-8 md:pb-0 lg:pr-12">
            <h4 className="text-2xl md:text-3xl font-medium text-center lg:text-left">
              Gartner
            </h4>
            <p className="text-slate-300 text-sm mt-2 text-center lg:text-left">
              Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic
              Quadrant for Unified Endpoint Management tools 2022.
            </p>
          </div>

          <div className="pb-8 md:pb-0">
            <h4 className="uppercase text-2xl md:text-3xl font-medium text-center lg:text-left">
              Forrester
            </h4>
            <p className="text-slate-300 text-sm mt-2 text-center lg:text-left">
              Forrester includes Hexnode as a Notable vendor in The Unified
              Management Landscape, Q3 2023.
            </p>
          </div>
        </div>
      </section>

      <WhyHexnodeCard />
      <FeaturesCard />
      <MultiPlatform />
      <PricingTable />
      <Customers />
      <LogosSlider />
      <Footer />
    </>
  );
};

export default Home;
