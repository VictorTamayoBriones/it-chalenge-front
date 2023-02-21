import { SessionPersistence } from "@/utils/SessionPersistence/SessionPersistence";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = SessionPersistence();

export const UsersTokensSlice = createSlice({
    name: 'usersSlice',
    initialState: INITIAL_STATE,
    reducers: {
        updateDataSession:(state, action)=>{
            
            //Montar la data en el session Storage
                        
            sessionStorage.setItem('access_token', JSON.stringify(action.payload.access_token));
            sessionStorage.setItem('refresh_token', JSON.stringify(action.payload.refresh_token));

            sessionStorage.setItem('user_email', action.payload.user_email);
            sessionStorage.setItem('role_name', action.payload.role_name);

            sessionStorage.setItem('permissions', JSON.stringify(action.payload.permissions));

            //montar la data en el state
            state.access_token = action.payload.access_token
            state.refresh_token = action.payload.refresh_token
            
            state.user_email = action.payload.user_email
            state.role_name = action.payload.role_name
           
            // console.log(permissions)
            state.permissions = action.payload.permissions
            
            // console.log(allPermissions)
            // state.permissions = action.payload.permissions
        }
    }
})


export const { updateDataSession } = UsersTokensSlice.actions 
export default UsersTokensSlice.reducer