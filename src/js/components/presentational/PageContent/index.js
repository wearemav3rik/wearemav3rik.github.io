import React from 'react';

const PageContent = ({ children, title }) => (
    <div className="page-content">
        <div className="container">
            <div className="docs-overview py-5">
                <h2 className="row justify-content-center styled-heading">{title}</h2>
                <div className="row justify-content-center">
                    { children }
                </div>
            </div>
        </div>
    </div>
);

export default PageContent;