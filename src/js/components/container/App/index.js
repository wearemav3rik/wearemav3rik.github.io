import React from 'react';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from '../../presentational/Header';
import TableOfContents from "../TableOfContents";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'
import DocsPage from "../DocsPage";

library.add(fas, fab);

const DocsPageComponent = ({ match }) => {
    const { contentId } = match.params;
    return (
        <React.Fragment>
            <Header withSearchEnabled />
            <DocsPage contentId={contentId}/>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/docs-page/:contentId" exact component={DocsPageComponent} />
                <Route path="/" exact>
                    <Header />
                    <TableOfContents />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;