import React from 'react';

const Header = () => (
    <header className="header fixed-top">

        <div className="branding docs-branding">
            <div className="container-fluid position-relative py-2">
                <div className="docs-logo-wrapper">
                    <div className="site-logo"><a className="navbar-brand" href="index.html"><img
                        className="logo-icon me-2" height="50"
                        src="https://camo.githubusercontent.com/58e3f08430b415cf962b6c64de507f641fb027653fef6fe358e3d0dc3b423aa2/68747470733a2f2f6d61763372696b2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30372f6d61763372696b2d686f6d652e737667"
                        alt="logo"/><span
                        className="logo-text">Coding<span className="text-alt"> Style Guide</span></span></a></div>
                </div>

                <div className="docs-top-utilities d-flex justify-content-end align-items-center">

                    <ul className="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
                        <li className="list-inline-item"><a href="#"><i className="fab fa-github fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item"><a href="#"><i
                            className="fab fa-twitter fa-fw"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-slack fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item"><a href="#"><i
                            className="fab fa-product-hunt fa-fw"></i></a></li>
                    </ul>

                    <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderdocs-free-bootstrap-5-documentation-template-for-software-projects/"
                       className="btn btn-primary d-none d-lg-flex">Download</a>
                </div>

            </div>

        </div>

    </header>
)

export default Header;