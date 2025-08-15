import React from "react";

function QuickLink() {
  const quickLinks = [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Kite user manual",
  ];
  return (
    <>
      <div
        className="mb-2 ps-4"
        style={{ backgroundColor: "#f6f6f6", lineHeight: "4rem" }}
      >
        Quick Links
      </div>
      <ol className="ps-5">
        {quickLinks.map((item, idx) => (
          <li className="border-bottom mb-3 pb-1" key={idx}>
            <a href="" className="text-decoration-none">
              {item}
            </a>
          </li>
        ))}
      </ol>
    </>
  );
}

export default QuickLink;
