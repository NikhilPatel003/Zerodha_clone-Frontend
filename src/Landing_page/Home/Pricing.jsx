import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Pricing() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-4">
          <h2 className="mb-4">Unbeatable pricing</h2>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="col-2"></div>
        <div className="col-6 d-block">
          <div className="d-inline-block">
            <img
              src="/media/Images/pricing0.svg"
              alt="zero image"
              style={{ width: "30%" }}
            />
            <p>
              {" "}
              Free account <br />
              opening
            </p>
          </div>
          <div className="d-inline-block">
            <img
              src="/media/Images/pricing0.svg"
              alt="zero image"
              style={{ width: "30%" }}
            />
            <p>
              Free equity delivery <br />
              and direct mutual funds
            </p>
          </div>
          <div className="d-inline-block">
            <img
              src="/media/Images/intradayTrades.svg"
              alt="zero image"
              style={{ width: "30%" }}
            />
            <p>
              {" "}
              Intraday and <br />
              F&O
            </p>
          </div>
        </div>
      </div>
      <p><a href="" className="text-decoration-none">See pricing <ArrowForwardIcon/></a></p>
    </div>
  );
}

export default Pricing;
