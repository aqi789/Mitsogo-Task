import React from "react";

const Footer = () => {
  return (
    <section className="mt-20">
      <div className="bg-[#020A19] py-10">
        <h2 className="text-white text-center text-2xl md:text-4xl font-semibold">
          Get Hexnode UEM and start securing your
          <br />
          endpoints
        </h2>
        <div className="flex items-center justify-center mt-5">
          <button className="bg-[#bb022a] text-center pt-4 pb-4 pr-6 pl-6 m-5 text-white font-semibold text-sm md:text-lg uppercase">
            Try Hexnode for Free
          </button>
        </div>
      </div>
      <div className="bg-[#f7f7f7] px-5 md:px-24 w-full flex flex-col md:flex-row justify-between items-center py-5">
        <div>
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 text-[#333] text-xs md:text-sm">
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-[#333] text-xs md:text-sm text-center md:text-left">
            Copyright © 2024 Mitsogo Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
