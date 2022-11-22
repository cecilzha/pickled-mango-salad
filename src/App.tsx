import React from "react";

import "./App.scss";

import Shell from './components/shell/Shell';
import StatesDropdown from "./components/states-dropdown/StatesDropdown"
import SimpleDatePicker from "./components/datepicker/SimpleDatePicker"
import SimpleMap from './components/map/SimpleMap'
import NewsFeed from "./page/NewsFeed/NewsFeed";
import {Content} from "carbon-components-react";

const App = () => {
    return (
            <>
                <Shell />
                <Content>
                    <NewsFeed />
                </Content>
            </>
    );
};

export default App;
