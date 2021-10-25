import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CalloutBlock = ({ children, type, label }) => {
  let icon = '';

  if (type === 'success') {
    icon = ['fas', 'thumbs-up'];
  } else if (type === 'danger') {
    icon = ['fas', 'exclamation-triangle'];
  } else if (type === 'warning') {
    icon = ['fas', 'bullhorn'];
  } else if (type === 'info') {
    icon = ['fas', 'info-circle'];
  }

  return (
      <div className={`callout-block callout-block-${type}`}>
        <div className="content">
          <h4 className="callout-title">
            <span className="callout-icon-holder me-1">
              <FontAwesomeIcon icon={icon} fixedWidth />
            </span>
            {label}
          </h4>
          <p dangerouslySetInnerHTML={{__html: children}}/>
        </div>
      </div>
  );
}

export default CalloutBlock;
