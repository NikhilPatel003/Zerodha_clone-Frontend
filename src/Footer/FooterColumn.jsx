export default function FooterColumn({ title, links }) {
  return (
    <ul className="list-unstyled">
      <li className="fs-5 mb-2">{title}</li>
      {links.map((link, idx) => (
        <li className="mb-2" key={idx}>
          <a href="" className="text-secondary text-decoration-none">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
