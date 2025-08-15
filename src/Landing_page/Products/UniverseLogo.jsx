import React from "react";
import PropTypes from "prop-types";

function UniverseLogo({ imageUrl, description }) {
  return (
    <a
      href="#"
      className="d-block text-center mt-5 text-decoration-none text-muted"
      aria-label="Partner platform description"
    >
      <img
        src={imageUrl}
        alt="Partner platform logo"
        height={55}
        className="mb-3"
        loading="lazy"
      />
      <br />
      <span>
        {description.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </span>
    </a>
  );
}

UniverseLogo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UniverseLogo;
