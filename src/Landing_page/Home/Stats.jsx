import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Stats() {
  const statsData = [
    {
      title: "Customer-first always",
      description:
        "That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.",
    },
    {
      title: "No spam or gimmicks",
      description:
        'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.',
    },
    {
      title: "The Zerodha universe",
      description:
        "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
    },
    {
      title: "Do better with money",
      description:
        "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];

  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-12 col-md-5 mb-5 mb-md-0">
          <h2 className="mb-5">Trust with confidence</h2>

          {statsData.map((item, index) => (
            <div key={index} className="mb-4">
              <h4>{item.title}</h4>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-7 text-center">
          <img
            src="/media/Images/ecosystem.png"
            alt="Zerodha ecosystem illustration"
            className="img-fluid mb-4"
            style={{ maxWidth: "80%" }}
          />

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="#" className="text-decoration-none d-flex align-items-center gap-2">
              Explore our products <ArrowForwardIcon />
            </a>
            <a href="#" className="text-decoration-none d-flex align-items-center gap-2">
              Try Kite demo <ArrowForwardIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
