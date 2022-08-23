import React, {useState, useEffect, useRef, ReactNode, useMemo} from 'react';
import MapContext from "./MapContext";
import * as ol from "ol";

import './Map.css'

import {PluggableMap} from "ol";
import {Coordinate} from "ol/coordinate";

import {useDispatch} from "react-redux";
import {hasBegunMoving} from "../../redux/reducers/mapEventMoveSlice";

type Props = {
    center: Coordinate,
    zoom: number,
    children: ReactNode
}

const Map: React.FC<Props> = ({zoom, center, children}) => {
    const [map, setMap] = useState<PluggableMap>();

    const mapRef = useRef<null | HTMLDivElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        // options to build the map object
        let options = {
            view: new ol.View({zoom, center}),
            layers: [],
            controls: [],
            overlays: [],
        };

        let mapObject: PluggableMap = new ol.Map(options);
        if (mapRef.current !== null) {
            mapObject.setTarget(mapRef.current);
            setMap(mapObject);
        }

        return () => mapObject.setTarget(undefined);
    }, [mapRef]);


    useMemo(() => {
        if (!map) return;
        map.getView().setCenter(center);
    }, [center])

    useMemo(() => {
        if (!map) return;
        map.getView().setZoom(zoom);
    }, [zoom])

    useMemo(() => {
        if (!map) return;

        map.on('movestart', () => {
            dispatch(hasBegunMoving())
        })

    }, [map])

    return (
        <MapContext.Provider value={map}>
            <div ref={mapRef} className="ol-map">
                {children}
            </div>
        </MapContext.Provider>
    );
}

export default Map;
