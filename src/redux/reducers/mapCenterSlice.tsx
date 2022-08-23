import { createSlice } from '@reduxjs/toolkit'
import { REGIONS, Region } from '../../constants/constants'

const regions : Map<string, Region> = REGIONS
const ZOOM_BACK : number = 5
const ZOOM_TO_REGION : number = 7

export const mapCenterSlice = createSlice({
    name: 'mapCenter',
    initialState: {
        center: regions.get("overall")?.coordinate,
        zoom: ZOOM_BACK
    },
    reducers: {
        flyToKachin: state => {
            state.center = regions.get("kachin")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToKayah: state => {
            state.center = regions.get("kayah")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToKayin: state => {
            state.center = regions.get("kayin")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToChin: state => {
            state.center = regions.get("chin")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToMon: state => {
            state.center = regions.get("mon")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToRakhine: state => {
            state.center = regions.get("rakhine")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToShan: state => {
            state.center = regions.get("shan")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToBago: state => {
            state.center = regions.get("bago")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToSagaing: state => {
            state.center = regions.get("sagaing")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToTanintharyi: state => {
            state.center = regions.get("tanintharyi")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToMagway: state => {
            state.center = regions.get("magway")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToMandalay: state => {
            state.center = regions.get("mandalay")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToYangon: state => {
            state.center = regions.get("yangon")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyToAyeyarwaddy: state => {
            state.center = regions.get("ayeyarwaddy")?.coordinate
            state.zoom = ZOOM_TO_REGION
        },
        flyBack: state => {
            state.center = regions.get("overall")?.coordinate
            state.zoom = ZOOM_BACK
        },
    }
})

export const {
    flyToKachin,
    flyToBago,
    flyToChin,
    flyToKayin,
    flyToAyeyarwaddy,
    flyToMon,
    flyToKayah,
    flyToMandalay,
    flyToMagway,
    flyToYangon,
    flyToTanintharyi,
    flyToShan,
    flyToSagaing,
    flyToRakhine,
    flyBack, } = mapCenterSlice.actions

export const selectCenter = (state: { mapCenter: { center: any; }; }) => state.mapCenter.center;
export const selectZoom = (state: { mapCenter: { zoom: any } }) => state.mapCenter.zoom;

export default mapCenterSlice.reducer
