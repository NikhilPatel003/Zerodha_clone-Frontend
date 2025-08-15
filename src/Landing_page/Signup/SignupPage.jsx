import Hero from "./Hero";
import InvestmentOptions from "./InvestmentOptions";
import StepAccountOpen from "./StepAccountOpen";
import Benefits from "./Benefits";
import Explore from "./Explore";
import OpenAccount from "../OpenAccount";

function SignupPage() {
  return (
    <>
      <Hero />
      <InvestmentOptions />
      <StepAccountOpen />
      <Benefits />
      <OpenAccount />
    </>
  );
}

export default SignupPage;
