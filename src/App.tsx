import React, { useState } from "react";
import Map from "./components/map/Map";

import Layers from './components/map/layers/Layers';
import TileLayer from './components/map/layers/TileLayer';

import osm from './components/map/source/osm';

import { fromLonLat, get } from "ol/proj";

import Controls from "./components/map/controls/Controls";
import FullScreenControl from "./components/map/controls/FullScreenControl";

import "./App.css";
import {Coordinate} from "ol/coordinate";

const App = () => {
  const [center, setCenter] = useState<Coordinate>([96.199379, 16.871311]);
  const [zoom, setZoom] = useState(5);

    return (
      <div>
        <Map center={fromLonLat(center)} zoom={zoom}>
          <Layers>
            <TileLayer source={osm()} zIndex={0} />
          </Layers>
          {/*<Controls>*/}
          {/*  <FullScreenControl />*/}
          {/*</Controls>*/}
        </Map>
      </div>
  );
};

export default App;
