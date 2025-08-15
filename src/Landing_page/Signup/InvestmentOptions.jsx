import Button from "@mui/material/Button";

function InvestmentOptions() {
  const investmentOptions = [
    {
      imageUrl: "/media/signup/stocks-acop.svg", // Replace with actual image path or URL
      title: "Stocks",
      description: "Invest in all exchange-listed securities",
    },
    {
      imageUrl: "/media/signup/ipo-acop.svg",
      title: "Mutual funds",
      description: "Invest in commission-free direct mutual funds",
    },
    {
      imageUrl: "/media/signup/mf-acop.svg",
      title: "IPO",
      description: "Apply to the latest IPOs instantly via UPI",
    },
    {
      imageUrl: "/media/signup/fo-acop.svg",
      title: "Futures & options",
      description:
        "Hedge and mitigate market risk through simplified F&O trading",
    },
  ];

  return (
    <div className="container text-center" style={{marginBottom:"100px"}}>
      <h2 className="mb-5">
        Investment options with Zerodha demat account
      </h2>
      <div className="row p-5">
        <div className="col-6">
          <InvestmentItem
            imageurl={investmentOptions[0].imageUrl}
            title={investmentOptions[0].title}
            description={investmentOptions[0].description}
          />
          <InvestmentItem
            imageurl={investmentOptions[1].imageUrl}
            title={investmentOptions[1].title}
            description={investmentOptions[1].description}
          />
        </div>
        <div className="col-6">
          <InvestmentItem
            imageurl={investmentOptions[2].imageUrl}
            title={investmentOptions[2].title}
            description={investmentOptions[2].description}
          />
          <InvestmentItem
            imageurl={investmentOptions[3].imageUrl}
            title={investmentOptions[3].title}
            description={investmentOptions[3].description}
          />
        </div>
      </div>
      <p>
        <Button
              variant="contained"
              size="large"
              aria-label="Explore Investment"
            >
              Explore Investement
            </Button>
      </p>
    </div>
  );
}

const InvestmentItem = ({ imageurl, title, description }) => {
  return (
    <div className="d-flex align-items-center mb-5 gap-5">
      <img src={imageurl} alt="image" style={{width:"112px"}} />
      <div className="text-start">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InvestmentOptions;
