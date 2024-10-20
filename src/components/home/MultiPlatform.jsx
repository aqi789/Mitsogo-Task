import React, { useState } from "react";
import android from "../../assets/images/platforms/android.webp";
import iOS from "../../assets/images/platforms/iOS.webp";
import macOS from "../../assets/images/platforms/macOS.webp";
import windows from "../../assets/images/platforms/windows.webp";
import tvOS from "../../assets/images/platforms/tvOS.webp";
import fireOS from "../../assets/images/platforms/fireOS.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MultiPlatform = () => {
  const [currentImage, setCurrentImage] = useState(android);
  const [activePlatform, setActivePlatform] = useState("Android");
  const [imageTransition, setImageTransition] = useState(false);

  const platforms = [
    {
      name: "Android",
      description:
        "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
      image: android,
    },
    {
      name: "iOS",
      description:
        "Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.",
      image: iOS,
    },
    {
      name: "macOS",
      description:
        "Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.",
      image: macOS,
    },
    {
      name: "Windows",
      description:
        "Spearhead modern PC management in your organization with Hexnode. Set limits and monitor PC health and compliance remotely with Hexnode UEM.",
      image: windows,
    },
    {
      name: "tvOS",
      description:
        "Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.",
      image: tvOS,
    },
    {
      name: "FireOS",
      description:
        "Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.",
      image: fireOS,
    },
  ];

  const handlePlatformClick = (platform) => {
    setImageTransition(true);

    setTimeout(() => {
      setCurrentImage(platform.image);
      setImageTransition(false);
      setActivePlatform(platform.name);
    }, 200);
  };

  return (
    <section className="bg-[#f7f7f7] pr-24 pl-24 w-full pb-20" id="platforms">
      <h2 className="text-4xl font-semibold text-center pt-20">
        Multi-platform Endpoint Management
      </h2>
      <p className="text-center text-lg text-[#333333] mt-8">
        Devices of varying platforms? Hexnode thrives in a diverse environment.
      </p>

      <div className="flex items-start justify-between md:pt-[50px]">
        <div
          className="shrink-0 md:w-[46%] md:max-w-[600px] h-full max-h-[565px] relative overflow-hidden"
          style={{ position: "sticky", top: "74px" }}
        >
          <div
            className="rounded-[20px] overflow-hidden transition-all duration-500 ease-out"
            style={{ width: "100%", height: "565px" }}
          >
            <img
              src={currentImage}
              alt="Current platform screenshot"
              className={`w-full h-full object-cover transition-transform transition-opacity duration-200 ease-in-out ${
                imageTransition
                  ? "transform -translate-y-full opacity-0"
                  : "transform translate-y-0 opacity-100"
              }`}
            />
          </div>
        </div>

        <div className="min-h-[375px] md:w-[54%] md:max-w-[700px] shrink-0 w-full relative pl-[40px]">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="relative group active bg-[#fff]  rounded-[15px] px-[30px] p-5 border-[#D7D7D7] border-b cursor-pointer transition-all duration-300 hover:bg-[#f0f0f0]"
              onClick={() => handlePlatformClick(platform)}
            >
              <h3 className=" font-semibold text-[24px] leading-[30px]">
                {platform.name}
              </h3>

              {activePlatform === platform.name && (
                <>
                  <p className="text-[#333333] text-[18px] pt-[10px] pb-[10px]">
                    {platform.description}
                  </p>
                  <a
                    href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                    className="text-red-600 text-lg"
                  >
                    Try Hexnode on your endpoints
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultiPlatform;
