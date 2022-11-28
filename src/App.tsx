import React from "react";

import "./App.scss";

import Shell from './components/shell/Shell';
import NewsFeed from "./page/NewsFeed/NewsFeed";
import {Content} from "carbon-components-react";

// @ts-ignore
// rationale: Theme type is not provided in @carbon/react.
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
