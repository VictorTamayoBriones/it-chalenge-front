import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = '';

export const NeddToReloadSlice = createSlice({
    name:'NeedToReloadSlice',
    initialState: INITIAL_STATE,
    reducers:{
        updateSectionToReload:(state, action)=>{
            return action.payload
        }
    }
})

export const { updateSectionToReload } = NeddToReloadSlice.actions
export default NeddToReloadSlice.reducer