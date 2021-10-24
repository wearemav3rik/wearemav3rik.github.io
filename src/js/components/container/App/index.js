import React from 'react';
import Header from '../../presentational/Header';
import PageHeader from "../../presentational/PageHeader";
import PageFooter from "../../presentational/PageFooter";
import Footer from "../../presentational/Footer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faGithubAlt, faFacebookF, faTwitch, faSlack } from "@fortawesome/free-brands-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faHeart, fab);

const App = () => {
    return (
        <div>
            <Header />
            <PageHeader />
            <PageFooter />
            <Footer />
        </div>
    );
}

export default App;