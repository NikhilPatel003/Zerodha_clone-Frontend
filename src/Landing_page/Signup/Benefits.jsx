import React from "react";

function Benefits() {
  const features = [
    {
      heading: "Unbeatable pricing",
      description:
        "Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.",
    },
    {
      heading: "Best investing experience",
      description:
        "Simple and intuitive trading platform with an easy-to-understand user interface.",
    },
    {
      heading: "No spam or gimmicks",
      description:
        'Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.',
    },
    {
      heading: "The Zerodha universe",
      description:
        "More than just an app — gain free access to the entire ecosystem of our partner products.",
    },
  ];

  return (
    <div className="container" style={{ marginBottom: "70px" }}>
      <div className="row">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <p>
            <img
              src="/media/signup/acop-benefits.svg"
              alt="benefits image"
              style={{ width: "350px" }}
            />
          </p>
          <h2 className="fs-4">Benefits of opening a Zerodha demat account</h2>
        </div>
        <div className="col-6 pt-5 pe-5">
          {features.map((feature, idx) => (
            <BenefitsItem
              key={idx}
              heading={feature.heading}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const BenefitsItem = ({ heading, description }) => {
  return (
    <>
      <h3 className="mb-3">{heading}</h3>
      <p className="text-muted fs-5 mb-4">{description}</p>
      <br />
    </>
  );
};

export default Benefits;
