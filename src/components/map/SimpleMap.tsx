import React from 'react';

import {useSelector} from "react-redux";
import {selectCenter, selectZoom} from "../../redux/reducers/mapCenterSlice";

import Map from "./Map";
import {fromLonLat} from "ol/proj";
import Layers from "./layers/Layers";
import TileLayer from "./layers/TileLayer";
import osm from "./source/osm";

const SimpleMap = () => {
    const coordinate = useSelector(selectCenter);
    const magnify = useSelector(selectZoom);

    return(
        <div className='map-window'>
            <Map center={fromLonLat(coordinate)} zoom={magnify}>
                <Layers>
                    <TileLayer source={osm()} zIndex={0}/>
                </Layers>
            </Map>
        </div>
    )
}

export default SimpleMap
