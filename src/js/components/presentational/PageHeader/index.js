import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PageHeader = () => (
    <React.Fragment>
        <div className="theme-bg-dark" style={{position: 'absolute', width: '100%', height:'200px'}}>
            <div className="theme-bg-shapes-left"/>
        </div>
        <div className="page-header theme-bg-dark pt-5 text-center position-relative" style={{transform: 'matrix(1, -0.09, 0, 1, 0, 0)'}}>
            <div className="theme-bg-dark py-5 position-relative" style={{height: '300px'  }}>
                <div className="theme-bg-shapes-right"/>
                <div className="theme-bg-shapes-left"/>
                <div className="container" style={{transform: 'matrix(1, 0.09, 0, 1, 0, 0)' }}>
                    <h1 className="page-heading styled-heading single-col-max mx-auto">Coding Style Guide</h1>
                    <div className="page-intro single-col-max mx-auto">
                        The official coding standards for the developers of Mav3rik.
                    </div>
                    <div className="main-search-box pt-3 d-block mx-auto">
                        <form className="search-form w-100">
                            <input type="text" placeholder="Search the docs..." name="search"
                                   className="form-control search-input"/>
                            <button type="submit" className="btn search-btn" value="Search">
                                <FontAwesomeIcon icon={['fas','search']} fixedWidth />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default PageHeader;