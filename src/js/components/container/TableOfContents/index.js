import React from "react";
import PageHeader from "../../presentational/PageHeader";
import PageContent from "../../presentational/PageContent";
import PageContentItem from "../../presentational/PageContentItem";
import PageFooter from "../../presentational/PageFooter";
import Footer from "../../presentational/Footer";

import { contentsForApex } from "../../content/contentForApex";

const TableOfContents = () => (
  <React.Fragment>
    <PageHeader />
    <PageContent title="Apex">
      {contentsForApex.map((content) => (
        <PageContentItem
          key={content.id}
          title={content.title}
          icon={content.icon}
          href={`docs-page/${content.id}#${content.id}`}
        >
          {content.description}
        </PageContentItem>
      ))}
    </PageContent>
    <PageFooter />
    <Footer />
  </React.Fragment>
);

export default TableOfContents;
