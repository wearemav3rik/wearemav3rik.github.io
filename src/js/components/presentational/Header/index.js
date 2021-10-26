import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = ({ withSearchEnabled }) => (
    <header className="header fixed-top">

        <div className="branding docs-branding">
            <div className="container-fluid position-relative py-2">
                <div className="docs-logo-wrapper">
                    <div className="site-logo"><a className="navbar-brand" href="/"><img
                        className="logo-icon me-2" height="50"
                        src="https://camo.githubusercontent.com/58e3f08430b415cf962b6c64de507f641fb027653fef6fe358e3d0dc3b423aa2/68747470733a2f2f6d61763372696b2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30372f6d61763372696b2d686f6d652e737667"
                        alt="logo"/><span
                        className="logo-text">Coding<span className="text-alt"> Style Guide</span></span></a></div>
                </div>

                <div className="docs-top-utilities d-flex justify-content-end align-items-center">

                    {
                        !!withSearchEnabled && (
                            <div className="top-search-box d-none d-lg-flex">
                                <form className="search-form">
                                    <input type="text" placeholder="Search the docs..." name="search"
                                           className="form-control search-input" />
                                    <button type="submit" className="btn search-btn" value="Search">
                                        <FontAwesomeIcon icon={['fas', 'search']} />
                                    </button>
                                </form>
                            </div>
                        )
                    }

                    <ul className="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
                        <li className="list-inline-item"><a href="https://github.com/wearemav3rik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} fixedWidth /></a></li>
                        <li className="list-inline-item"><a href="https://linkedin.com/company/mav3rik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} fixedWidth /></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/wearemav3rik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth /></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/wearemav3rik" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} fixedWidth /></a></li>
                        <li className="list-inline-item"><a href="https://mav3rikworkspace.slack.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'slack']} fixedWidth /></a></li>
                    </ul>

                    <a href="https://mav3rik.com" target="_blank" rel="noreferrer noopener"
                       className="btn btn-primary d-none d-lg-flex" style={{background: 'linear-gradient(78.1deg, #8F2D56 0%, #D81159 100%)'}}>We are Hiring!</a>
                </div>

            </div>

        </div>

    </header>
)

export default Header;