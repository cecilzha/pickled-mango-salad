import { createSlice } from '@reduxjs/toolkit'

export const mapCenterSlice = createSlice({
    name: 'mapCenter',
    initialState: {
        center: [96.199379, 16.871311],
        zoom: 5
    },
    reducers: {
        flyToKachin: state => {
            state.center = [97.344060, 26.076080]
            state.zoom = 7
        },
        flyToKayah: state => {
            state.center = [97.375359, 19.233860]
            state.zoom = 7
        },
        flyToKayin: state => {
            state.center = [97.786060, 17.154010]
            state.zoom = 7
        },
        flyToChin: state => {
            state.center = [93.510712, 22.166090]
            state.zoom = 7
        },
        flyToMon: state => {
            state.center = [97.868420, 15.747850]
            state.zoom = 7
        },
        flyToRakhine: state => {
            state.center = [94.079780, 19.408330]
            state.zoom = 7
        },
        flyToShan: state => {
            state.center = [99.832176, 21.090860]
            state.zoom = 7
        },
        flyToBago: state => {
            state.center = [96.483333, 17.333333]
            state.zoom = 7
        },
        flyToSagaing: state => {
            state.center = [95.985820, 21.885380]
            state.zoom = 7
        },
        flyToTanintharyi: state => {
            state.center = [99.013240, 12.089010]
            state.zoom = 7
        },
        flyToMagway: state => {
            state.center = [94.935110, 20.149950]
            state.zoom = 7
        },
        flyToMandalay: state => {
            state.center = [96.093292, 21.954510]
            state.zoom = 7
        },
        flyToYangon: state => {
            state.center = [96.199379, 16.871311]
            state.zoom = 7
        },
        flyToAyeyarwaddy: state => {
            state.center = [94.738101, 16.775361]
            state.zoom = 7
        },
        flyBack: state => {
            state.center = [96.199379, 16.871311]
            state.zoom = 5
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state: { mapCenter: { center: any; }; }) => state.mapCenter.center;
export const selectZoom = (state: { mapCenter: { zoom: any } }) => state.mapCenter.zoom;

export default mapCenterSlice.reducer
