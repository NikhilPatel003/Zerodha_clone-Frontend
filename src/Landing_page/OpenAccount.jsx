import Button from "@mui/material/Button";

function OpenAccount() {
  return (
    <section className="open-account-section container text-center" style={{marginBottom:"100px"}}>
      <div className="row">
        <div className="col-12">
          <h1 className="mt-5">Open a Zerodha account</h1>
          <p className="fs-5">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
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
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
