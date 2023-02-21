import { AlertModel } from '@/components'
import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE:AlertModel={
    isVisible: false,
    status: 'info',
    title: '',
    description: ''
}

export const AlertSlice = createSlice({
    name: 'AlertSlice',
    initialState: INITIAL_STATE,
    reducers:{
        updateAlert:(state, action)=>{
            return action.payload
        }
    }
})

export const { updateAlert } = AlertSlice.actions
export default AlertSlice.reducer