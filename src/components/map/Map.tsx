import React, {useState, useEffect, useRef, ReactNode, useMemo} from 'react';
import MapContext from "./MapContext";
import * as ol from "ol";

import './Map.css'

import { PluggableMap } from "ol";
import {Coordinate} from "ol/coordinate";
import store from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {hasBegunMoving, hasStoppedMoving, isMapMoving} from "../../redux/reducers/mapEventMoveSlice";
import TileLayer from "ol/layer/Tile";
import {GeoTIFF, Source, TileJSON, XYZ} from "ol/source";
import {normalize} from "ol/color";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import {MVT} from "ol/format";
import {Fill, Icon, Stroke, Style} from "ol/style";
import VectorSource from "ol/source/Vector";

type Props = {
    center: Coordinate,
    zoom: number,
    children: ReactNode
}

const Map : React.FC<Props> = ({ zoom, center, children }) => {
    const mapRef = useRef();
    const [map, setMap] = useState<PluggableMap>();

    const [move, setMove] = useState();

    const isMoving = useSelector(isMapMoving);
    const dispatch = useDispatch();

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

    useMemo(() => {
        if (!map) return;
        map.getView().setCenter(center);
    }, [center])

    useMemo(() => {
        if (!map) return;
        map.getView().setZoom(zoom);
    }, [zoom])

    useMemo(() => {
        if (!map) {
            console.log("map not loaded");
            return;
        }

        map.on("movestart", () => {
            dispatch(hasBegunMoving())
            console.log("started panning")
            console.log(store.getState().mapEventMove)
        })

    }, [map])

    return(
        <MapContext.Provider value={ map }>
            <div ref={mapRef} className="ol-map">
                {children}
            </div>
        </MapContext.Provider>
    );
}

export default Map;
