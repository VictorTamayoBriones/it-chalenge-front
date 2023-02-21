import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = true

export const AsideMenuSlice = createSlice({
    name:'AsideMenuSlice',
    initialState:INITIAL_STATE,
    reducers:{
        toogleAsideMenu:(state, action)=>{
            return action.payload
        }
    }
})

export const { toogleAsideMenu } = AsideMenuSlice.actions
export default AsideMenuSlice.reducer