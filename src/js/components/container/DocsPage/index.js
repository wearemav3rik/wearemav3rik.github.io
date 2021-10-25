import React from 'react';
import Gist from 'react-gist';
import Sidebar from "../../presentational/Sidebar";
import SidebarItem from "../../presentational/SidebarItem";
import CalloutBlock from  '../../presentational/CalloutBlock';

import { contentsForApex } from "../../content/contentForApex";

const DocsPage = () => (
    <div className="docs-wrapper">
        <Sidebar>
            {
                contentsForApex.map(content => (
                    <SidebarItem title={content.title} icon={content.icon} href={`docs-page#${content.id}`}
                                 links={content.sections.map(section => ({ href: `docs-page#${section.id}`, label: section.label}))}
                    />
                ))
            }
        </Sidebar>
        <div className="docs-content">
            <div className="container">
                {
                    contentsForApex.map(content => (
                        <article className="docs-article" id={content.id}>
                            <header className="docs-header">
                                <h1 className="docs-heading">{content.title}
                                    <span className="docs-time">Last updated: {content.lastModifiedDate}</span>
                                </h1>
                                <section className="docs-intro">
                                    <p>{content.description}</p>
                                </section>
                            </header>
                            {
                                content.sections.map(section => (
                                    <section className="docs-section" id={section.id}>
                                        <h2 className="section-heading">{section.label}</h2>
                                        {
                                            !!section.elements && section.elements.map(element => {
                                                if (element.type === 'paragraph') {
                                                    return (
                                                        <p dangerouslySetInnerHTML={{__html: element.html}} />
                                                    )
                                                } else if (element.type === 'code-block') {
                                                    return (
                                                        <div className="docs-code-block">
                                                            <Gist id={element.gist} />
                                                        </div>
                                                    )
                                                } else if (element.type === 'callout-block') {
                                                    return (
                                                        <CalloutBlock type={element.blockType} label={element.label}>{element.html}</CalloutBlock>
                                                    )
                                                }
                                            })
                                        }
                                    </section>
                                ))
                            }
                            <hr/>
                        </article>
                    ))
                }
            </div>
        </div>
    </div>
);

export default DocsPage;