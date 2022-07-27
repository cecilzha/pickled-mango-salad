import { createContext } from "react";
import {PluggableMap} from "ol";

const MapContext = createContext<PluggableMap | undefined>(undefined);

export default MapContext;
