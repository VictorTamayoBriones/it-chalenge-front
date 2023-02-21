import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = false

export const CircleProgressIndicatorSlice = createSlice({
    name: 'CircleProgressIndicatorSlice',
    initialState: INITIAL_STATE,
    reducers:{
        updateIsLoading: (state, action)=>{
            return action.payload
        }
    }
})

export const { updateIsLoading } = CircleProgressIndicatorSlice.actions
export default CircleProgressIndicatorSlice.reducer