import React from "react";

import "./App.scss";

import Shell from './components/shell/Shell';
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import {Content} from "carbon-components-react";

// @ts-ignore
// Rationale: Theme is not provided by carbon-components-react.
import {Theme} from '@carbon/react'

const App = () => {
    return (<Theme theme="g90">
            <Shell/>
            <Content>
                <NewsFeed/>
            </Content>
        </Theme>);
};

export default App;
