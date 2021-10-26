import React from 'react';
// import Gist from 'react-gist';
import Sidebar from "../../presentational/Sidebar";
import SidebarItem from "../../presentational/SidebarItem";
// import CalloutBlock from  '../../presentational/CalloutBlock';
import Element from '../../presentational/Element';

import { contentsForApex } from "../../content/contentForApex";
import Footer from "../../presentational/Footer";

// const DocsPageElement = ({ element }) => {
//     switch(element.type) {
//         case 'paragraph':
//             return (
//                 <p dangerouslySetInnerHTML={{__html: element.html}} />
//             )
//         case 'code-block':
//             return (
//                 <div className="docs-code-block">
//                     <Gist id={element.gist} />
//                 </div>
//             )
//         case 'callout-block':
//             return (
//                 <CalloutBlock type={element.blockType} label={element.label}>{element.html}</CalloutBlock>
//             )
//     }
// }
const DocsPage = ({ contentId }) => {
    const pageContent = contentsForApex.filter(content => content.id === contentId);
    return (
        <div className="docs-wrapper">
            <Sidebar>
                {
                    contentsForApex.map(content => (
                            <SidebarItem key={`DocsPage-SidebarItem-${content.id}`} title={content.title} icon={content.icon} href={`/docs-page/${content.id}#${content.id}`}
                                         links={content.sections.map(section => ({ href: `/docs-page/${content.id}#${section.id}`, label: section.label}))}
                            />
                        )
                    )
                }
            </Sidebar>
            <div className="docs-content">
                <div className="container">
                    {
                        pageContent.map(content => (
                            <article key={`DocsPage-Article-${content.id}`} className="docs-article" id={content.id}>
                                <header className="docs-header">
                                    <h1 className="docs-heading">{content.title}
                                        <span className="docs-time">Last updated: {content.lastModifiedDate}</span>
                                    </h1>
                                    <section className="docs-intro">
                                        <p>{content.description}</p>
                                    </section>
                                </header>
                                {
                                    content.sections.map((section, i) => (
                                        <section key={`DocsPage-Section-${content.id}-${section.id}-${i}`} className="docs-section" id={section.id}>
                                            <h2 className="section-heading">{section.label}</h2>
                                            {
                                                !!section.elements && section.elements.map((element, i) => (
                                                    <React.Fragment key={`DocsPage-Element-${content.id}-${section.id}-${i}`}>
                                                        <Element element={element} />
                                                    </React.Fragment>
                                                ))
                                            }
                                        </section>
                                    ))
                                }
                            </article>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DocsPage;