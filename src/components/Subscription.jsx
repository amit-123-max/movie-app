import React, { useState } from "react";
import "./Subscription.css"; // Make sure to rename your CSS file and import it

const plans = [
  {
    id: "ins-0",
    name: "Mobile",
    resolution: "480p",
    price: "RS.149",
    quality: "Fair",
    supportedDevices: "Mobile phone, tablet",
    screens: "1",
    downloads: "1",
  },
  {
    id: "ins-1",
    name: "Basic",
    resolution: "720p(HD)",
    price: "RS.199",
    quality: "Good",
    supportedDevices: "Tv, Computer, Mobile phone, tablet",
    screens: "1",
    downloads: "1",
  },
  {
    id: "ins-2",
    name: "Standard",
    resolution: "1080p(Full HD)",
    price: "Rs.499",
    quality: "Great",
    supportedDevices: "Tv, Computer, Mobile phone, tablet",
    screens: "2",
    downloads: "2",
  },
  {
    id: "ins-3",
    name: "Premium",
    resolution: "4K(Ultra HD) + HDR",
    price: "Rs.649",
    quality: "Best",
    spatialAudio: "Included",
    supportedDevices: "Tv, Computer, Mobile phone, tablet",
    screens: "4",
    downloads: "6",
  },
];

const SubscriptionPage = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`main-1 subscription ${mode}`}>
      <div className="main-2">
        <div className="body">
          <div className="head">
            <h1>BINGE WATCH !!!</h1>
            <button onClick={toggleMode}>Change mode</button>
          </div>

          <div className="text">
            <h3>Choose the plan that's right for you</h3>
          </div>

          <div className="boxes">
            {plans.map((plan) => (
              <div key={plan.id} className="box">
                <div className="inside" id={plan.id}>
                  {plan.name}
                  <br />
                  {plan.resolution}
                </div>
                <br />
                <div className="text-section-1">
                  <p className="text1">
                    Monthly price <br /> <b>{plan.price}</b> <br />
                    <br />
                    <hr />
                    <br />
                    Video and sound quality <br /> <b>{plan.quality}</b> <br />
                    <br />
                    <hr />
                    <br />
                    Resolution <br /> <b>{plan.resolution}</b> <br />
                    <br />
                    <hr />
                    <br />
                    {plan.spatialAudio && (
                      <>
                        Spatial audio <br /> <b>{plan.spatialAudio}</b> <br />
                        <br />
                        <hr />
                        <br />
                      </>
                    )}
                    Supported devices <br /> <b>{plan.supportedDevices}</b>{" "}
                    <br />
                    <br />
                    <hr />
                    <br />
                    Devices your household can watch at the same time <br />{" "}
                    <b>{plan.screens}</b> <br />
                    <br />
                    <hr />
                    <br />
                    Download devices <br /> <b>{plan.downloads}</b> <br />
                    <br />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
