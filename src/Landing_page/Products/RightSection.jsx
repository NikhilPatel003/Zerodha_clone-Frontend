import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMoreText,
  learnMorelink,
}) {
  return (
    <div className="container py-5 px-3 mt-5">
      <div className="row align-items-center justify-content-between">
        {/* Text Section */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h2 className="mb-3">{productName}</h2>
          <p className="mb-4" style={{ lineHeight: "1.7" }}>
            {productDescription}
          </p>
          <a
            href={learnMorelink}
            className="text-decoration-none d-flex align-items-center gap-2 fw-medium"
          >
            {learnMoreText}
            <ArrowForwardIcon />
          </a>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-7">
          <img
            src={imageUrl}
            alt={productName || "Product"}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
