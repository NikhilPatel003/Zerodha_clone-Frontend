import Accordion from "./SupportComponents/Accordion";
import FeaturedContent from "./SupportComponents/FeaturedContent";
import QuickLink from "./SupportComponents/QuickLink";

function CreateTicket() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-8">
          <Accordion />
        </div>
        <div className="col-4">
          <div
            className="row mt-5"
            style={{
              backgroundColor: "rgba(255, 235, 0, 0.1)",
              borderLeft: "8px",
              padding: "12px 20px",
            }}
          >
            <FeaturedContent />
          </div>
          <div className="row fs-5 mt-4 border">
            <QuickLink />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
