import React from "react";
import UniverseLogo from "./UniverseLogo";
import Button from "@mui/material/Button";

const logos = [
  {
    imageUrl: "/media/Images/zerodhaFundhouse.png",
    description: [
      "Our asset management venture",
      "that is creating simple and transparent index",
      "funds to help you save for your goals.",
    ],
  },
  {
    imageUrl: "/media/Images/streakLogo.png",
    description: [
      "Systematic trading platform",
      "that allows you to create and backtest",
      "strategies without coding.",
    ],
  },
  {
    imageUrl: "/media/Images/sensibullLogo.svg",
    description: [
      "Options trading platform that lets you",
      "create strategies, analyze positions, and examine",
      "data points like open interest, FII/DII, and more.",
    ],
  },
  {
    imageUrl: "/media/Images/smallcaseLogo.png",
    description: [
      "Thematic investing platform",
      "that helps you invest in diversified",
      "baskets of stocks or ETFs.",
    ],
  },
  {
    imageUrl: "/media/Images/tijori.svg",
    description: [
      "Investment research platform",
      "that offers detailed insights on stocks,",
      "sectors, supply chains, and more.",
    ],
  },
  {
    imageUrl: "/media/Images/dittoLogo.png",
    description: [
      "Personalized advice on life",
      "and health insurance. No spam",
      "and no mis-selling.",
    ],
  },
];

function Universe() {
  const columns = [0, 1, 2].map((colIndex) => (
    <div className="col" key={colIndex}>
      <UniverseLogo
        imageUrl={logos[colIndex * 2].imageUrl}
        description={logos[colIndex * 2].description}
      />
      <br />
      <UniverseLogo
        imageUrl={logos[colIndex * 2 + 1].imageUrl}
        description={logos[colIndex * 2 + 1].description}
      />
    </div>
  ));

  return (
    <div className="container my-5">
      <div className="row text-center">
        <h2 className="mb-4">The Zerodha Universe</h2>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row mb-3">{columns}</div>
        <div className="mt-5">
          <Button
            variant="contained"
            size="large"
            aria-label="Sign up for a Zerodha account"
          >
            Sign up for free
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
