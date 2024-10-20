import React from 'react'
import '../../App.css'
const PricingTable = () => {
  return (
    <section id="pricing" className=" pt-20 pl-20 pr-20 w-full h-full">
    <div>
      <h2 className="text-center font-semibold text-4xl mb-7">
        Pricing Details
      </h2>

      <div className="columns">
        <ul className="price">
          <li className="header">Basic</li>
          <li className="grey">$ 9.99 / year</li>
          <li>10GB Storage</li>
          <li>10 Emails</li>
          <li>10 Domains</li>
          <li>1GB Bandwidth</li>
          <li className="grey">
            <a href="/signup" className="button">
              Sign Up
            </a>
          </li>
        </ul>
      </div>

      <div className="columns">
        <ul className="price">
          <li className="header bg-[#333]">
            Pro
          </li>
          <li className="grey">$ 24.99 / year</li>
          <li>25GB Storage</li>
          <li>25 Emails</li>
          <li>25 Domains</li>
          <li>2GB Bandwidth</li>
          <li className="grey">
            <a href="/signup" className="button">
              Sign Up
            </a>
          </li>
        </ul>
      </div>

      <div className="columns">
        <ul className="price">
          <li className="header">Premium</li>
          <li className="grey">$ 49.99 / year</li>
          <li>50GB Storage</li>
          <li>50 Emails</li>
          <li>50 Domains</li>
          <li>5GB Bandwidth</li>
          <li className="grey">
            <a href="/signup" className="button">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default PricingTable