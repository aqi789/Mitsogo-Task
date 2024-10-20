import React from "react";
import zero from "../../assets/images/features/zero-touch.webp";
import automation from "../../assets/images/features/automation.webp";
import remote from "../../assets/images/features/remote-access.webp";
import endpoint from "../../assets/images/features/endpoint-security.webp";
import integrations from "../../assets/images/features/integrations.webp";
import app from "../../assets/images/features/app-management.webp";

const FeaturesCard = () => {
  return (
    <section className="pb-10 pt-20 pr-12 pl-12" id="features">
      <h2 className="text-4xl font-semibold text-center">
        Powerful endpoint management, built for
        <br />
        the devices you choose
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 pb-8 px-4">
        {[
          {
            img: zero,
            title: "Zero-touch Enrollment",
            description:
              "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
          },
          {
            img: automation,
            title: "Automation",
            description:
              "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.",
          },
          {
            img: remote,
            title: "Remote Access Management",
            description:
              "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
          },
          {
            img: endpoint,
            title: "Endpoint Security",
            description:
              "Secure endpoints with advanced security measures, ensuring data protection and compliance across all devices.",
          },
          {
            img: integrations,
            title: "Integrations",
            description:
              "Seamlessly integrate with existing tools and platforms, enhancing operational efficiency and productivity.",
          },
          {
            img: app,
            title: "App Management",
            description:
              "Manage and distribute applications across your endpoints effortlessly, ensuring all devices have the right tools.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="max-w-[380px] mx-auto overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full rounded-md transform transition-transform duration-300 hover:scale-110"
            />
            <h2 className="text-2xl font-semibold mt-4">{feature.title}</h2>
            <p className="text-lg mt-3 text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesCard;
