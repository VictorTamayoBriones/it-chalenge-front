import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = '';

export const SelectorSlice = createSlice({
    name:'SelectorSlice',
    initialState: INITIAL_STATE,
    reducers:{
        updateSelectordata: (state, action)=>{
            return action.payload
        }
    }
})

export const { updateSelectordata } = SelectorSlice.actions
export default SelectorSlice.reducer