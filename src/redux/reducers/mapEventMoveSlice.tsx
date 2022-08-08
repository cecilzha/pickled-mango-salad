import { createSlice } from '@reduxjs/toolkit'

export const mapEventMoveSlice = createSlice({
    name: 'mapEventMove',
    initialState: {
        isMoving: false,
    },
    reducers: {
        hasBegunMoving: state => {
            state.isMoving = true
        },
        hasStoppedMoving: state => {
            state.isMoving = false
        }
    }
})

export const { hasBegunMoving, hasStoppedMoving } = mapEventMoveSlice.actions

export const isMapMoving = (state: { mapEventMove: { isMoving: any } }) => state.mapEventMove.isMoving;

export default mapEventMoveSlice.reducer;
