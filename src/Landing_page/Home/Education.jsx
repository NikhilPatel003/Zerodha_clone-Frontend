import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row flex-row justify-content-between">
        <div className="col-5">
          <img src="/media/Images/education.svg" alt="education" />
        </div>
        <div className="col-6 mt-5 p-3">
          <h2 className="mb-3">Free and open market education</h2>
          <p className="mb-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="text-decoration-none">Varsity <ArrowForwardIcon/></a>
          <p className="mt-4 mb-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="text-decoration-none">TradingQ&A <ArrowForwardIcon/></a>
        </div>
      </div>
    </div>
  );
}

export default Education;
