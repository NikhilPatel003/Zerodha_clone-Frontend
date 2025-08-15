import React from "react";

function AccordionItem({ id, icon: Icon, title, content, isOpen }) {
  return (
    <div className="accordion-item mb-4 shadow-sm rounded">
      <h2 className="accordion-header">
        <button
          className={`accordion-button d-flex align-items-start gap-3 bg-light hover-shadow ${
            !isOpen ? "collapsed" : ""
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls={id}
        >
          <Icon className="mt-1 text-primary" />
          <div>
            <h6 className="mb-1 fw-semibold">{title}</h6>
          </div>
        </button>
      </h2>
      <div
        id={id}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {typeof content === "string" ? (
            <strong>{content}</strong>
          ) : (
            <ul className="text-start">
              {content.map((item, index) => (
                <li className="mb-2" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
