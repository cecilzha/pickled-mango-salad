import React, {useState} from "react";
import Map from "./components/map/Map";

import Layers from './components/map/layers/Layers';
import TileLayer from './components/map/layers/TileLayer';

import osm from './components/map/source/osm';

import {fromLonLat, get} from "ol/proj";

import Controls from "./components/map/controls/Controls";
import FullScreenControl from "./components/map/controls/FullScreenControl";

import "./App.scss";
import {Coordinate} from "ol/coordinate";

import {Button, Dropdown, DatePicker, DatePickerInput, Theme, section, Search, ClickableTile} from '@carbon/react';
import Shell from './components/shell/Shell';
import StatesDropdown from "./components/states-dropdown/StatesDropdown";
import SimpleDatePicker from "./components/datepicker/SimpleDatePicker";
import * as url from "url";
import ContentDrawer from "./components/contentdrawer/ContentDrawer";


const App = () => {
    const [center, setCenter] = useState<Coordinate>([96.199379, 16.871311]);
    const [zoom, setZoom] = useState(5);

    return (
        <Theme theme="g100">
            <div>
                <div className='map-window'>
                    <Map center={fromLonLat(center)} zoom={zoom}>
                        <Layers>
                            <TileLayer source={osm()} zIndex={0}/>
                        </Layers>
                    </Map>
                </div>
                <Shell/>
                <div className='float-window'>
                    <div className='drop-down'>
                        <StatesDropdown />
                    </div>
                    {/*<section className='weather-widget' />*/}
                    <div className='date-picker'>
                        <SimpleDatePicker />
                    </div>
                    <ContentDrawer />
                </div>
            </div>
        </Theme>
);
};

export default App;
