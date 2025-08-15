import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <section className="container my-5 text-center">
      <div className="row justify-content-center">
        <img
          src="/media/Images/homeHero.png"
          alt="Investment chart"
          className="img-fluid col-9"
          loading="lazy"
        />
      </div>
      <h1 className="mt-5">Invest in everything</h1>
      <p className="fs-5">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>

      <div className="mt-4">
        <Button
          variant="contained"
          size="large"
          aria-label="Sign up for a Zerodha account"
        >
          Sign up for free
        </Button>
      </div>
    </section>
  );
};

export default Hero;
