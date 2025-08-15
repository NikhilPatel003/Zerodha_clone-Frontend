import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  const product = [
    {
      name: "Kite",
      description:
        "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    },
    {
      name: "Console",
      description:
        "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    },
    {
      name: "Coin",
      description:
        "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
    },
    {
      name: "Kite Connect API",
      description:
        "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
    },
    {
      name : "Varsity mobile",
      description : "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
    }
  ];
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl={"/media/Images/kite.png"}
        productName={product[0].name}
        productDescription={product[0].description}
        tryDemo={"#"}
        learnMore={"#"}
      />
      <RightSection
        imageUrl={"/media/Images/console.png"}
        productName={product[1].name}
        productDescription={product[1].description}
        learnMoreText={"Learn more"}
      />
      <LeftSection
        imageUrl={"/media/Images/coin.png"}
        productName={product[2].name}
        productDescription={product[2].description}
        tryDemo={"#"}
      />
      <RightSection
        imageUrl={"/media/Images/kiteconnect.png"}
        productName={product[3].name}
        productDescription={product[3].description}
        learnMoreText={"Kite Connect"}
      />
      <LeftSection
        imageUrl={"/media/Images/varsity.png"}
        productName={product[4].name}
        productDescription={product[4].description}
      />
      <Universe />
    </>
  );
}

export default ProductsPage;
