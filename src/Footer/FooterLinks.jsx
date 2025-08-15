const links = [
  "NSE",
  "BSE",
  "MCX",
  "Terms & conditions",
  "Policies & procedures",
  "Privacy policy",
  "Disclosure",
  "For investor's attention",
  "Investor charter",
];

export default function FooterLinks() {
  return (
    <div className="text-center mt-4">
      <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3">
        {links.map((text, idx) => (
          <li key={idx}>
            <a href="" className="text-decoration-none text-secondary">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
