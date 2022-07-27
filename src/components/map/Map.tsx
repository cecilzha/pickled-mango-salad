import React, {useState, useEffect, useRef, ReactNode} from 'react';
import MapContext from "./MapContext";
import * as ol from "ol";

import './Map.css'

import { PluggableMap } from "ol";
import {Coordinate} from "ol/coordinate";

type Props = {
    center: Coordinate,
    zoom: number,
    children: ReactNode
}

const Map : React.FC<Props> = ({ zoom, center, children }) => {
    const mapRef = useRef();
    const [map, setMap] = useState<PluggableMap>();

    useEffect(() => {
        let options = {
            view: new ol.View({zoom, center}),
            layers: [],
            controls: [],
            overlays: [],
        };
        let mapObject : PluggableMap = new ol.Map(options);
        mapObject.setTarget(mapRef.current);
        setMap(mapObject);

        return () => mapObject.setTarget(undefined);
    }, [mapRef]);

    useEffect(() => {
        if (!map) return;
        map.getView().setCenter(center);
    }, [center]);

    useEffect(() => {
        if (!map) return;
        map.getView().setZoom(zoom);
    }, [zoom]);

    return(
        <MapContext.Provider value={ map }>
            <div ref={mapRef} className="ol-map">
                {children}
            </div>
        </MapContext.Provider>
    );
}

export default Map;
