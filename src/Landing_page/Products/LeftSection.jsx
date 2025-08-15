import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="container py-5 px-4 mt-5">
      <div className="row align-items-center justify-content-between g-1">
        {/* Image Column */}
        <div className="col-12 col-md-7 text-center mb-4 mb-md-0">
          <img
            src={imageUrl}
            alt={`${productName} interface`}
            className="img-fluid"
          />
        </div>

        {/* Content Column */}
        <div className="col-12 col-md-4">
          <h2 className="mb-3">{productName}</h2>
          <p
            className="fs-6 text-muted mb-4"
            style={{ lineHeight: "1.7" }} // Increased line height
          >
            {productDescription}
          </p>

          {/* Conditional Links */}
          {(tryDemo || learnMore) && (
            <div className="d-flex gap-4 mb-4 flex-wrap">
              {tryDemo && (
                <a
                  href={tryDemo}
                  className="text-decoration-none d-flex align-items-center gap-2"
                >
                  Try demo <ArrowForwardIcon />
                </a>
              )}
              {learnMore && (
                <a
                  href={learnMore}
                  className="text-decoration-none d-flex align-items-center gap-2"
                >
                  Learn more <ArrowForwardIcon />
                </a>
              )}
            </div>
          )}

          {/* App Links */}
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <a href={googlePlay}>
              <img
                src="/media/Images/googlePlayBadge.svg"
                alt="Get it on Google Play"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="/media/Images/appstoreBadge.svg"
                alt="Download on the App Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
