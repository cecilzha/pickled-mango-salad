import { configureStore } from '@reduxjs/toolkit'
import mapCenterReducer from './reducers/mapCenterSlice'
import mapEventMoveReducer from './reducers/mapEventMoveSlice'

export default configureStore({
    reducer: {
        mapCenter: mapCenterReducer,
        mapEventMove: mapEventMoveReducer
    }
});
