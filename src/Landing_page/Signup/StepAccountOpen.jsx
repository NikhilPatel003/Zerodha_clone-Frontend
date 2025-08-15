import { div } from "motion/react-client";
import React from "react";

function StepAccountOpen() {
  return (
    <div className="bg-light">
      <div
        className="container"
        style={{ marginBottom: "100px", marginTop: "50px" }}
      >
        <div className="row text-center p-5">
          <h2 className="mb-5">Steps to open a demat account with Zerodha</h2>
          <div className="col-6">
            <img src="/media/signup/steps-acop.svg" alt="Step Image" />
          </div>
          <div className="col-6 text-start mt-5 fs-4">
            <div className="d-flex justify-content-start border-bottom p-2 gap-3">
              <div
                className="border rounded-circle text-center"
                style={{ width: "40px", height: "40px" }}
              >
                01
              </div>
              <p>Enter the requested details</p>
            </div>
            <div className="d-flex justify-content-start border-bottom p-2 gap-3">
              <div
                className="border rounded-circle text-center"
                style={{ width: "40px", height: "40px" }}
              >
                02
              </div>
              <p>Complete e-sign & verification</p>
            </div>
            <div className="d-flex justify-content-start border-bottom p-2 gap-3">
              <div
                className="border rounded-circle text-center"
                style={{ width: "40px", height: "40px" }}
              >
                03
              </div>
              <p>Start investing!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepAccountOpen;
