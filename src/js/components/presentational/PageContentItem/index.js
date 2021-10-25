import React from "react";
import { HashLink } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageContentItem = ({ children, title, icon, href }) => (
  <div className="col-12 col-lg-4 py-3">
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-3">
          <span className="theme-icon-holder card-icon-holder me-2">
            <FontAwesomeIcon icon={icon} fixedWidth />
          </span>
          <span className="card-title-text">{title}</span>
        </h5>
        <div className="card-text">{children}</div>
        <HashLink smooth to={href}>
          <span className="card-link-mask" />
        </HashLink>
      </div>
    </div>
  </div>
);

export default PageContentItem;
