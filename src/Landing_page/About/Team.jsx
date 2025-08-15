import React from "react";

function Team() {
  return (
    <section className="mb-5">
      <div className="container">
        <h2 className="mb-5 text-center">People</h2>

        <div className="row align-items-center justify-content-between">
          {/* Profile Image */}
          <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
            <figure>
              <img
                src="/media/Images/nithinKamath.jpg"
                alt="Nithin Kamath"
                className="rounded-circle mb-3"
                height={295}
              />
              <figcaption>
                <h5 className="mb-1">Nithin Kamath</h5>
                <p className="text-muted">Founder, CEO</p>
              </figcaption>
            </figure>
          </div>

          {/* Profile Description */}
          <div className="col-12 col-md-7 fs-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade-long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on <a href="/">Homepage</a> /{" "}
              <a href="/">TradingQnA</a> / <a href="/">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
