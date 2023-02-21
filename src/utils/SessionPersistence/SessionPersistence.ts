import { IAuthData } from '../../models/resAuthData';

export const SessionPersistence = ():IAuthData =>{
    
    const emptyAuthData: IAuthData={
        access_token:'',
        refresh_token:'',
        user_email: '',
        role_name: '',
        permissions:{
            actions: [''],
            modules:  [''],
            permissions:  [''],
            roles:  [''],
            users:  [''],
        },
    }
    //Revisar si exixte una session activa
    if( sessionStorage.getItem('access_token') || '' ){
        //Si ya existe una session retornar los tokens para actualaizar redux con los datos de la session
        const authData: IAuthData={
            access_token:JSON.parse(sessionStorage.getItem('access_token') || ''),
            refresh_token: JSON.parse(sessionStorage.getItem('refresh_token') || ''),
            user_email: sessionStorage.getItem('user_email'),
            role_name: sessionStorage.getItem('role_name'),
            permissions: JSON.parse(sessionStorage.getItem('permissions') || ''),
        }
    
        return authData
        
    }
    
    return emptyAuthData;
}