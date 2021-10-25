import React from 'react';

const Sidebar = ({children}) => (
    <div id="docs-sidebar" className="docs-sidebar sidebar-visible">
        {/*<div className="top-search-box d-lg-none p-3">*/}
        {/*    <form className="search-form">*/}
        {/*        <input type="text" placeholder="Search the docs..." name="search"*/}
        {/*               className="form-control search-input" />*/}
        {/*            <button type="submit" className="btn search-btn" value="Search">*/}
        {/*                <FontAwesomeIcon icon={['fas', 'search']} fixedWidth/>*/}
        {/*            </button>*/}
        {/*    </form>*/}
        {/*</div>*/}
        <nav id="docs-nav" className="docs-nav navbar">
            <ul className="section-items list-unstyled nav flex-column pb-3">
                {children}
            </ul>
        </nav>
    </div>
);

export default Sidebar;