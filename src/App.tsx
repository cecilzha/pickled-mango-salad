import React, {useEffect, useState, useMemo, useCallback, useContext} from "react";
import Map from "./components/map/Map";

import Layers from './components/map/layers/Layers';
import TileLayer from './components/map/layers/TileLayer';

import osm from './components/map/source/osm';

import {fromLonLat, get} from "ol/proj";

import Controls from "./components/map/controls/Controls";
import FullScreenControl from "./components/map/controls/FullScreenControl";

import "./App.scss";
import {Coordinate} from "ol/coordinate";

import {Theme, Button} from '@carbon/react';
import Shell from './components/shell/Shell';
import StatesDropdown from "./components/states-dropdown/StatesDropdown";
import SimpleDatePicker from "./components/datepicker/SimpleDatePicker";
import ContentDrawer from "./components/contentdrawer/ContentDrawer";

import store from './redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {flyToRakhine, flyBack, selectZoom} from "./redux/reducers/mapCenterSlice";
import {selectCount} from './redux/reducers/mapCenterSlice';
import MapContext from "./components/map/MapContext";
import {hasBegunMoving, hasStoppedMoving} from "./redux/reducers/mapEventMoveSlice";
import mapContext from "./components/map/MapContext";

const App = () => {
    const [center, setCenter] = useState<Coordinate>([96.199379, 16.871311]);
    const [zoom, setZoom] = useState(5);

    const coordinate = useSelector(selectCount);
    const magnify = useSelector(selectZoom);
    const dispatch = useDispatch();

    const map = useContext(mapContext);

    useEffect(() => {
        if (!map) return;
        map.on("movestart", function () {
            dispatch(hasBegunMoving);
            console.log("started panning");
        });
    }, [map]);

    return (
        <Theme theme="g10">
            <div>
                <div className='map-window'>
                    <Map center={fromLonLat(coordinate)} zoom={magnify}>
                        <Layers>
                            <TileLayer source={osm()} zIndex={0}/>
                        </Layers>
                    </Map>
                </div>
                <Shell/>
                <div className='float-window'>
                    <div className='drop-down'>
                        <SimpleDatePicker />
                    </div>
                    {/*<section className='weather-widget' />*/}
                    <div className='date-picker'>
                        <StatesDropdown/>
                    </div>
                    {/*<ContentDrawer/>*/}
                </div>
            </div>
        </Theme>
    );
};

export default App;
