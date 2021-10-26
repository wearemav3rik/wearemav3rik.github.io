import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PageFooter = () => (
  <section className="cta-section text-center py-5 theme-bg-dark position-relative" style={{transform: 'matrix(1, -0.09, 0, 1, 0, 0)'}}>
    <div className="theme-bg-shapes-right"/>
    <div className="theme-bg-shapes-left"/>
    <div className="container" style={{transform: 'matrix(1, 0.09, 0, 1, 0, 0)' }}>
      <h3 className="mb-2 text-white mb-3 styled-heading">
        Participate in Improving the Style Guide
      </h3>
      <div className="section-intro text-white mb-3 single-col-max mx-auto">
        Want to help us improve the style guide? We always value new
        perspectives and it is never too late to share your inputs. Click below
        to take part in this journey.
      </div>
      <div className="pt-3 text-center">
        <a
          className="btn btn-light"
          href="https://github.com/wearemav3rik/Mav3rik-Coding-Style-Guide"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute <FontAwesomeIcon icon={['fas', 'arrow-alt-circle-right']} fixedWidth />
        </a>
      </div>
    </div>
  </section>
);

export default PageFooter;
