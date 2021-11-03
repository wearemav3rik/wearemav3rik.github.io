import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Sidebar = ({children}) => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const sidebarClass = isSidebarVisible ? 'sidebar-visible' : '';
    const buttonClass = isSidebarVisible ? 'caret-square-left' : 'book-open';
    const sidebarMarginLeft = isSidebarVisible ? 265 : 10;
    const sidebarMarginTop = isSidebarVisible ? 0 : '30%';

    return (
        <React.Fragment>
            <div id="docs-sidebar" className={`docs-sidebar ${sidebarClass}`}>
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
            <div title="Toggle Sidebar" style={{position: 'fixed', zIndex: 100, marginLeft: sidebarMarginLeft, marginTop: sidebarMarginTop}} onClick={() => setSidebarVisible(!isSidebarVisible)}>
                <FontAwesomeIcon className="theme-icon-holder" icon={['fas', buttonClass]} fixedWidth style={{ height: '40px'}}/>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;