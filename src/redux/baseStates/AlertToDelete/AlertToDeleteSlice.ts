import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    status: false,
    title: '',
    body: '',
    toDelete:{
        id:'',
        section: ''
    }
}

export const AlertToDeleteSlice = createSlice({
    name:'AlertToDeleteSlice',
    initialState: INITIAL_STATE,
    reducers:{
        updateDataAlert:(state, action)=>{
            return action.payload
        }
    }
})

export const { updateDataAlert } = AlertToDeleteSlice.actions
export default AlertToDeleteSlice.reducer