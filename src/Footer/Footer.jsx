import FooterBrand from "./FooterBrand";
import FooterColumn from "./FooterColumn";
import FooterDisclaimer from "./FooterDisclaimer";
import FooterLinks from "./FooterLinks";

const footerData = [
  {
    title: "Account",
    links: [
      "Open demat account",
      "Minor demat account",
      "NRI demat account",
      "Commodity",
      "Dematerialisation",
      "Fund transfer",
      "MTF",
      "Referral program",
    ],
  },
  {
    title: "Support",
    links: [
      "Contact us",
      "Support portal",
      "How to file a complaint?",
      "Status of your complaints",
      "Bulletin",
      "Circular",
      "Z-Connect blog",
      "Downloads",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Philosophy",
      "Press & media",
      "Careers",
      "Zerodha Cares (CSR)",
      "Zerodha.tech",
      "Open source",
    ],
  },
  {
    title: "Quick links",
    links: [
      "Upcoming IPOs",
      "Brokerage charges",
      "Market holidays",
      "Economic calendar",
      "Calculators",
      "Markets",
      "Sectors",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 mt-2">
            <FooterBrand />
          </div>
          <div className="col-md-9">
            <div className="row">
              {footerData.map((section, idx) => (
                <div className="col-md-3" key={idx}>
                  <FooterColumn title={section.title} links={section.links} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <FooterDisclaimer />
        <FooterLinks />
      </div>
    </footer>
  );
}
