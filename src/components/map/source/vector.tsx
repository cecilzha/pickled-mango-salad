import { Vector as VectorSource } from 'ol/source';
import Feature from "ol/Feature";
import {Geometry} from "ol/geom";

type Props = {
    features: Feature[]
}

function vector({ features } : Props) : VectorSource<Geometry> {
    return new VectorSource({
        features
    });
}

export default vector;
