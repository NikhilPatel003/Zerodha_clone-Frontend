import SearchIcon from "@mui/icons-material/Search";
import { div } from "motion/react-client";

function Hero() {
  return (
    <div style={{ backgroundColor: "#f0f4f7ff" }}>
      <div className="container py-5">
        {/* Header Section */}
        <header className="d-flex justify-content-between align-items-center pb-3 mb-4">
          <h4 className="mb-0 fs-1 fw-semibold">Support Portal</h4>
          <a href="#" className="text-decoration-none fs-2">
            My Tickets
          </a>
        </header>

        {/* Search Form */}
        <form>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <SearchIcon style={{ color: "#6c757d" }} />
            </span>
            <input
              type="search"
              className="form-control"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
              aria-label="Search support articles"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
