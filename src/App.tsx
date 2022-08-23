import React from "react";

import "./App.scss";

import Shell from './components/shell/Shell';
import StatesDropdown from "./components/states-dropdown/StatesDropdown"
import SimpleDatePicker from "./components/datepicker/SimpleDatePicker"
import SimpleMap from './components/map/SimpleMap'

const App = () => {
    return (
            <div>
                <SimpleMap />
                <Shell/>
                <div className='float-window'>
                    <div className='date-picker'>
                        <SimpleDatePicker />
                    </div>
                    <div className='drop-down'>
                        <StatesDropdown/>
                    </div>
                </div>
            </div>
    );
};

export default App;
