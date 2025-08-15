import React from "react";

function Hero() {
  const chargesData = [
    {
      image: "/media/Images/pricingMF.svg",
      title: "Free equity delivery",
      description:
        "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
    },
    {
      image: "/media/Images/intradayTrades.svg",
      title: "Intraday and F&O trades",
      description:
        "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
    },
    {
      image: "/media/Images/pricingMF.svg",
      title: "Free direct MF",
      description:
        "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
    },
  ];

  return (
    <div className="container">
      <div className="row text-center mt-5 py-5">
        <section>
          <h1 className="fs-3">Charges</h1>
          <p className="text-muted fs-4 mb-5">List of all charges and taxes</p>
        </section>

        <section className="row mt-5">
          {chargesData.map((item, index) => (
            <div className="col-4 text-center p-5" key={index}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "250px", marginBottom: "15px" }}
              />
              <h2 style={{fontSize:"1.75rem",lineHeight:"1.6",marginBottom:"20px"}}>{item.title}</h2>
              <p className="text-muted my-3 px-3" style={{lineHeight:"1.8",}}>{item.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Hero;
